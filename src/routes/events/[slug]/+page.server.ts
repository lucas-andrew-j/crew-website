import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eventsTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
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

	const res = await fetch(
		`https://api.smugmug.com/api/v2/album/${event.albumKey}!images?APIKey=${API_KEY}&_expand=ImageSizes&count=100`,
		{ headers: { Accept: 'application/json' } }
	);

	if (!res.ok) return { event, imageUrls: [] };

	const imageData = await res.json();

	const images = imageData.Response?.AlbumImage ?? [];
	const imageUrls = images.map((image) => {
		const sizesUri = image.Uris?.ImageSizes?.Uri;
		const sizeDetails = sizesUri ? imageData.Expansions?.[sizesUri] : null;
		const largestImageUrl = sizeDetails?.ImageSizes?.LargestImageUrl ?? null;
		const smallerImageUrl = sizeDetails?.ImageSizes?.MediumImageUrl ?? image?.ThumbnailUrl ?? null;

		return {
			thumbnailUrl: smallerImageUrl,
			largestImageUrl: largestImageUrl,
		};
	});

	return {
		event, imageUrls
	};
};
