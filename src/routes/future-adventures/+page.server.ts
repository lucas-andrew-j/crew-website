import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { eventsTable } from '../../lib/server/db/schema';
import { error } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

export async function load() {
	const events = await db.select().from(eventsTable)
		.where(sql`${eventsTable.endDateTime} >= CURRENT_TIMESTAMP`)
		.orderBy(eventsTable.startDateTime);

	if (!events) error(404);

	return {
		events
	};
}