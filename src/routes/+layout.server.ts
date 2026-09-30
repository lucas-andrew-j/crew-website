import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({locals, depends}) => {
	depends('app:auth');
	return { loggedIn: !!locals.user };
};
