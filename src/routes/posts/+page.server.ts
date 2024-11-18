import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals: { pb }, parent, url }) => {
	const { tags } = await parent();

	const tagId = tags.find((tag) => tag.name === url.searchParams.get('tag'))?.id;
	const filter = tagId
		? pb.filter('published = true && tags ~ {:tagId}', { tagId })
		: pb.filter('published = true');

	return {
		posts: await pb.collection('posts').getList(1, 5, {
			sort: '-publish_date',
			filter
		})
	};
};
