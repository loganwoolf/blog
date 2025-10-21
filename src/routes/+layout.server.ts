import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { pb } }) => {
	return {
		tags: pb ? await pb.collection('tags').getFullList() : []
	};
};
