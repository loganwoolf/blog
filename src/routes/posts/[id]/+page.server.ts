import type { PageServerLoad } from './$types';
import type { Post, Tag } from '$lib/types/pocketbase';

export const load: PageServerLoad = async ({ params, locals: { pb } }) => {
	if (!pb) throw new Error('pocketbase is not connected');

	return {
		post: await pb.collection('posts').getFirstListItem<Post>(`id="${params.id}"`),
		tags: await pb.collection('tags').getFullList<Tag>()
	};
};
