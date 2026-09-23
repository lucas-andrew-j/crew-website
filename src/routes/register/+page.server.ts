import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { auth } from '$lib/server/auth';
import { isAPIError } from '@better-auth/core/utils/is-api-error';

async function validateTurnstile(token: string | null, remoteip: string) {
	const formData = new FormData();
	formData.append('secret', TURNSTILE_SECRET_KEY);
	formData.append('response', token ?? '');
	formData.append('remoteip', remoteip);

	try {
		const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: formData
		});

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Turnstile validation error:', error);
		return { success: false, 'error-codes': ['internal-error'] };
	}
}

export const load: PageServerLoad = (event) => {
	if (event.locals.user) {
		return redirect(302, '/');
	}
	return {};
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const token = data.get('cf-turnstile-response')?.toString() ?? null;
		const ip =
			request.headers.get('CF-Connecting-IP') ||
			request.headers.get('X-Forwarded-For') ||
			'unknown';

		const validation = await validateTurnstile(token, ip);

		if (!validation.success) {
			console.log('Turnstile validation error:', validation['error-codes']);
			return fail(400, { message: 'Turnstile validation failed' });
		}

		const firstName = data.get('firstName')?.toString() ?? '';
		const lastName = data.get('lastName')?.toString() ?? '';
		const email = data.get('email')?.toString() ?? '';
		const password = data.get('password')?.toString() ?? '';

		if (!firstName || !lastName || !email || !password) {
			return fail(400, { message: 'One or more required fields is empty' });
		}

		try {
			await auth.api.signUpEmail({
				body: {
					email,
					password,
					name: `${firstName} ${lastName}`,
					firstName,
					lastName,
				}
			});
		} catch (error) {
			if (isAPIError(error)) {
				return fail(400, {message: error.message || 'Registration failed' });
			}
			console.error(error);
			return fail(500, { message: 'Unexpected error' });
		}

		return redirect(302, '/');
	}
};
