import type { LayoutServerLoad } from './$types';
import type { Tag } from '$lib/types/pocketbase';

export const load: LayoutServerLoad = async ({ locals: { pb } }) => {
	return {
		tags: pb ? await pb.collection('tags').getFullList<Tag>() : [],
	};
};
