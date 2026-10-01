import type { User, Session } from 'better-auth';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	interface Window {
		turnstile: {
			render: (
				container: string | HTMLElement,
				params: { sitekey: string; theme?: string; size?: string }
			) => string;
			remove: (widgetId: string) => void;
		};
	}

	namespace App {
		interface Locals {
			user?: User;
			session?: Session;
		}

		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
