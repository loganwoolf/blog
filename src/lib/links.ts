export const links: Record<
	string,
	{
		url: string;
		type: 'social' | 'website' | 'contact';
		handle?: string;
	}
> = {
	x: {
		url: 'https://x.com/',
		handle: 'logan__woolf',
		type: 'social',
	},
	github: {
		url: 'https://github.com/',
		handle: 'loganwoolf',
		type: 'social',
	},
	website: {
		url: 'https://loganwoolf.dev',
		type: 'website',
	},
	email: {
		url: 'mailto:',
		handle: 'loganwoolf@gmail.com',
		type: 'contact',
	},
	phone: {
		url: 'tel:',
		handle: '+14033606893',
		type: 'contact',
	},
};
