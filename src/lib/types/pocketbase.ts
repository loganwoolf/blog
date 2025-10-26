import type { RecordModel } from 'pocketbase';

export interface Tag extends RecordModel {
	name: string;
}

export interface Post extends RecordModel {
	title: string;
	markdown: string;
	publish_date: string;
	tags: string[];
	published: boolean;
}
