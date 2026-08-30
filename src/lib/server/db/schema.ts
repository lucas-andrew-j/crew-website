import { pgTable, integer, varchar, timestamp, check, index } from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const events = pgTable('events', {
    id: integer('id').primaryKey().generatedByDefaultAsIdentity(),
    name: varchar('name', {length: 50}).notNull(),
    startDateTime: timestamp('start_date_time', {withTimezone: true}).notNull(),
    endDateTime: timestamp('end_date_time', {withTimezone: true}).notNull(),
	createdAt: timestamp('created_at', {withTimezone: true}).notNull().defaultNow(),
	updatedAt: timestamp('updated_at', {withTimezone: true}).notNull().defaultNow(),
}, (table) => [
	check('valid_date_range', sql`${table.endDateTime} >= ${table.startDateTime}`),
	index('start_date_time_idx').on(table.startDateTime),
	index('end_date_time_idx').on(table.endDateTime),
]);

export * from './auth.schema';
