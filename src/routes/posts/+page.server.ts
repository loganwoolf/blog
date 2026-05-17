import type { PageServerLoad } from './$types';
import type { Post } from '$lib/types/pocketbase';

export const load: PageServerLoad = async ({ locals: { pb }, parent, url }) => {
	if (pb === null) throw new Error('pocketbase is not connected');

	const { tags } = await parent();

	const selectedTagName = url.searchParams.get('tag');
	const tagId = tags.find((tag) => tag.name.toLowerCase() === selectedTagName?.toLowerCase())?.id;
	const filter = tagId
		? pb.filter('published = true && tags ~ {:tagId}', { tagId })
		: pb.filter('published = true');

	return {
		pageTitle: `Posts${tagId ? ' tagged #' + selectedTagName : ''}`,
		posts: await pb.collection('posts').getList<Post>(1, 5, {
			sort: '-publish_date',
			filter,
		}),
	};
};
