import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pb }, parent, url }) => {
	const { tags } = await parent();

	const selectedTagName = url.searchParams.get('tag');
	const tagId = tags.find((tag) => tag.name.toLowerCase() === selectedTagName?.toLowerCase())?.id;
	const filter = tagId
		? pb.filter('published = true && tags ~ {:tagId}', { tagId })
		: pb.filter('published = true');

	return {
		pageTitle: `Posts${tagId ? ' tagged #' + selectedTagName : ''}`,
		posts: await pb.collection('posts').getList(1, 5, {
			sort: '-publish_date',
			filter
		})
	};
};
