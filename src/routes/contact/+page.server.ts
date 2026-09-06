import { TURNSTILE_SECRET_KEY } from '$env/static/private';

async function validateTurnstile(token, remoteip) {
	const formData = new FormData();
	formData.append('secret', TURNSTILE_SECRET_KEY);
	formData.append('response', token);
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

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();

		const token = data.get('cf-turnstile-response');
		const ip =
			request.headers.get('CF-Connecting-IP') ||
			request.headers.get('X-Forwarded-For') ||
			'unknown';

		const validation = await validateTurnstile(token, ip);

		if (validation.success) {
			//send the email
			console.log('Turnstile validation success');
			console.log(data);
		} else {
			console.log('Turnstile validation error:', validation['error-codes']);
		}
	}
};
