import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eventsTable } from '../../lib/server/db/schema';
import { error } from '@sveltejs/kit';

const db = drizzle(process.env.DATABASE_URL!);

export async function load() {
	const events = await db.select().from(eventsTable);

	if (!events) error(404);

	return {
		events
	};
}