export const load = async ({ locals }) => {
	const { pb } = locals;
	const posts = await pb.collection('posts').getList(1, 5);
	const tags = await pb.collection('tags').getFullList();

	return { posts, tags };
};
