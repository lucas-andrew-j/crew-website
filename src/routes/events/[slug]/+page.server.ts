import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eventsTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { SMUGMUG_API_BASE } from '$lib/server/smugmug';
import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const eventId = Number(params.slug);

	if (!Number.isInteger(eventId)) error(404);

	const [event] = await db
		.select()
		.from(eventsTable)
		.where(eq(eventsTable.id, eventId));

	if (!event) error(404);

	if (!event.albumKey) return { event, imageUrls: [] };

	let res = await fetch(
		`${SMUGMUG_API_BASE}/api/v2/album/${event.albumKey}!images?count=100&APIKey=${API_KEY}&_expand=ImageSizes`,
		{ headers: { Accept: 'application/json' } }
	);

	const imageUrls = [];

	while (true) {
		if (!res.ok) break;

		const albumData = await res.json();

		const images = albumData.Response?.AlbumImage ?? [];
		imageUrls.push(...images.map((image) => {
			const sizesUri = image.Uris?.ImageSizes?.Uri;
			const sizeDetails = sizesUri ? albumData.Expansions?.[sizesUri] : null;
			const largestImageUrl = sizeDetails?.ImageSizes?.LargestImageUrl ?? null;
			const smallerImageUrl = sizeDetails?.ImageSizes?.MediumImageUrl ?? image?.ThumbnailUrl ?? null;

			return {
				thumbnailUrl: smallerImageUrl,
				largestImageUrl: largestImageUrl,
			};
		}));

		if (albumData.Response?.Pages?.NextPage) {
			res = await fetch(
				`${SMUGMUG_API_BASE}${albumData.Response.Pages.NextPage}&APIKey=${API_KEY}&_expand=ImageSizes`,
				{ headers: { Accept: 'application/json' } }
			);
		} else {
			break;
		}
	}

	return {
		event,
		imageUrls
	};
};
