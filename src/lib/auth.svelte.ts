// src/lib/auth.svelte.ts
import { createAuth0Client, type Auth0Client, type User } from '@auth0/auth0-spa-js';
import { PUBLIC_AUTH0_DOMAIN, PUBLIC_AUTH0_CLIENT_ID } from '$env/static/public';

type AuthState = {
	isAuthenticated: boolean;
	isLoading: boolean;
	user: User | undefined;
	error: Error | null;
};

let state = $state<AuthState>({
	isAuthenticated: false,
	isLoading: true,
	user: undefined,
	error: null,
});

let client: Auth0Client | undefined;

export async function initAuth0() {
	client = await createAuth0Client({
		domain: PUBLIC_AUTH0_DOMAIN,
		clientId: PUBLIC_AUTH0_CLIENT_ID,
		authorizationParams: {
			redirect_uri: window.location.origin,
		},
	});

	if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
		await client.handleRedirectCallback();
		window.history.replaceState({}, document.title, '/');
	}

	const isAuthenticated = await client.isAuthenticated();
	const user = isAuthenticated ? await client.getUser() : undefined;

	state.isAuthenticated = isAuthenticated;
	state.isLoading = false;
	state.user = user;
}

export const login = () =>
	client?.loginWithRedirect();

export const logout = () =>
	client?.logout({ logoutParams: { returnTo: window.location.origin } });

export const getToken = () =>
	client?.getTokenSilently();

// Export state as a getter so reactivity is preserved
export function getAuthState() {
	return state;
}