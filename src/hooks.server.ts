import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';
import Pocketbase from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.pb = env.PB_URL === 'bypass' ? null : new Pocketbase(env.PB_URL || 'http://localhost:8090');

	const response = await resolve(event);
	return response;
};
