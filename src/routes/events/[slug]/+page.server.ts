import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eventsTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { SMUGMUG_API_BASE } from '$lib/server/smugmug';
import { API_KEY } from '$env/static/private';

export const load: PageServerLoad = async ({ params }) => {
	const eventId = Number(params.slug);

	if (!Number.isInteger(eventId)) error(404);

	const [event] = await db
		.select()
		.from(eventsTable)
		.where(eq(eventsTable.id, eventId));

	if (!event) error(404);

	if (!event.albumKey) return { event, images: [] };

	return {
		event,
		firstPage: getAlbumPage(`/api/v2/album/${event.albumKey}!images?count=100`)
	};
};

async function getAlbumPage(uri: string): Promise<{ images: ImageUrls[]; next: Promise<any> | null }> {
	const res = await fetch(
		`${SMUGMUG_API_BASE}${uri}&APIKey=${API_KEY}&_expand=ImageSizes`,
		{ headers: { Accept: 'application/json' } }
	);

	if (!res.ok) return { images: [], next: null };

	const albumData = await res.json();
	const images = albumData.Response?.AlbumImage ?? [];
	const imageUrls = images.map((image) => {
		const sizesUri = image.Uris?.ImageSizes?.Uri;
		const sizeDetails = sizesUri ? albumData.Expansions?.[sizesUri] : null;
		const largestImageUrl = sizeDetails?.ImageSizes?.LargestImageUrl ?? null;
		const smallerImageUrl =
			sizeDetails?.ImageSizes?.MediumImageUrl ?? image?.ThumbnailUrl ?? null;

		return {
			thumbnailUrl: smallerImageUrl,
			largestImageUrl: largestImageUrl
		};
	});

	const nextPage = albumData.Response?.Pages?.NextPage;

	return {
		images: imageUrls,
		next: nextPage ? getAlbumPage(nextPage) : null,
	};
}
