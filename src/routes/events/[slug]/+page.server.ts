import { error } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { eventsTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// const post = posts.find((post) => post.slug === params.slug);

	const eventId = Number(params.slug);

	if (!Number.isInteger(eventId)) error(404);

	const [event] = await db
		.select()
		.from(eventsTable)
		.where(eq(eventsTable.id, eventId))
		.orderBy(eventsTable.startDateTime);

	if (!event) error(404);

	console.log(JSON.stringify(event));

	return {
		event
	};
};
