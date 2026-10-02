import { db } from '$lib/server/db';
import { eventsTable } from '../../lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { sql, desc } from 'drizzle-orm';
import { API_KEY } from '$env/static/private'

export async function load() {
	// const res = await fetch(
	// 	`https://api.smugmug.com/api/v2/user/mattstrother!albums?APIKey=${API_KEY}`,
	// 	{
	// 		headers: { Accept: 'application/json' }
	// 	}
	// );

	// const albumsData = await res.json();

	// for (const item of albumsData.Response.Album) {
	// 	console.log(item.Title + ' | ' + item.AlbumKey);
	// }
	// console.log(albumsData.Response.Album);

	const events = await db
		.select()
		.from(eventsTable)
		.where(sql`${eventsTable.endDateTime} < CURRENT_TIMESTAMP`)
		.orderBy(desc(eventsTable.startDateTime));

	if (!events) error(404);

	// for (const event of events) {
	// 	if (event.albumKey) {
	// 		const res = await fetch(
	// 			`https://api.smugmug.com/api/v2/album/${event.albumKey}!highlightimage?APIKey=${API_KEY}&_expand=ImageSizeDetails`,
	// 			{ headers: { Accept: 'application/json' } }
	// 		);
	//
	// 		const imageData = await res.json();
	// 		event.thumbnailImageUri = imageData.Response?.AlbumImage.ThumbnailUrl;
	// 	}
	// }

	const eventsWithThumbnails = await Promise.all(
		events.map(async (event) => {
			if (!event.albumKey) return { ...event, thumbnailUrl: null };

			const res = await fetch(
				`https://api.smugmug.com/api/v2/album/${event.albumKey}!highlightimage?APIKey=${API_KEY}&_expand=ImageSizeDetails`,
				{ headers: { Accept: 'application/json' } }
			);

			const imageData = await res.json();
			const thumbnailUrl = imageData.Response?.AlbumImage?.ThumbnailUrl ?? null;

			return { ...event, thumbnailUrl: thumbnailUrl };
		})
	);

	return {
		eventsWithThumbnails
	};
}
