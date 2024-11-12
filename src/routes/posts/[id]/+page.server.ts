import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals: { pb } }) => {
	return {
		post: await pb.collection('posts').getFirstListItem(`id="${params.id}"`),
		tags: await pb.collection('tags').getFullList()
	};
};
