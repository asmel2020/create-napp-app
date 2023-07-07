export const questions = [
	{
		type: 'list',
		name: 'templateRepository',
		message: 'Select a template de NestJS',
		choices: [
			{
				value: '1',
				name: 'Default',
			},
			{
				value: '2',
				name: 'Prisma + PostgreSQL + Auth(JWT)',
			},
		],
	},
];