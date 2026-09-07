import { TURNSTILE_SECRET_KEY } from '$env/static/private';
import { RESEND_API_KEY } from '$env/static/private';
import { Resend } from 'resend';
import { escapeHtml } from '$lib/utils/sanitize.ts';

const resend = new Resend(RESEND_API_KEY);

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
			return;
		}

		if (!data.get('name') || !data.get('email') || !data.get('message')) {
			console.log('One or more required fields is null');
			return;
		}

		const { success, error } = await resend.emails.send({
			from: 'Olympic Adventure Experience <onboarding@resend.dev>',
			to: ['ajcoconut@proton.me'],
			replyTo: data.email,
			subject: `New contact form submission from ${data.get('name')}`,
			html: `
				<p><strong>Name:</strong> ${data.get('name')}</p>
				<p><strong>Email:</strong> ${data.get('email')}</p>
				<p><strong>Phone:</strong> ${data.get('phone')}</p>
				<p><strong>Message:</strong></p>
				<p>${data.get('message')}</p>
			`
		});

		if (error) {
			return console.error({ error });
		}
	}
};
