import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { pb } }) => {
	return {
		tags: await pb.collection('tags').getFullList()
	};
};
