import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pb } }) => {
	return {
		posts: await pb.collection('posts').getList(1, 5),
		tags: await pb.collection('tags').getFullList()
	};
};
