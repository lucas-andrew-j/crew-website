import { env } from '$env/dynamic/private';
import { betterAuth } from 'better-auth/minimal';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { sveltekitCookies } from 'better-auth/svelte-kit';
import { getRequestEvent } from '$app/server';
import { db } from '$lib/server/db';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';

const resend = new Resend(RESEND_API_KEY);

export const auth = betterAuth({
	baseURL: env.ORIGIN,
	secret: env.BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, { provider: 'pg' }),
	user: {
		additionalFields: {
			firstName: { type: 'string', required: true },
			lastName: { type: 'string', required: true }
		}
	},
	databaseHooks: {
		user: {
			create: {
				before: async (user) => ({
					data: { ...user, name: `${user.firstName} ${user.lastName}` }
				})
			}
		}
	},
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url, token }, request) => {
			resend.emails
				.send({
					from: 'Olympic Adventure Experience <onboarding@resend.dev>',
					to: user.email,
					subject: 'Verify your email address',
					html: `Click the link to verify your email: <a href="${url}">${url}</a>`
				})
				.then(({ error }) => {
					if (error) console.error('...', error);
				})
				.catch((err) => console.error('...', err));
		},
		autoSignInAfterVerification: true,
		sendOnSignIn: true,
	},
	plugins: [
		sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
	]
});
