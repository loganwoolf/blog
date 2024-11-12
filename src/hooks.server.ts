import { PB_URL } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase(PB_URL || 'http://localhost:8090');

	const response = await resolve(event);
	return response;
};
