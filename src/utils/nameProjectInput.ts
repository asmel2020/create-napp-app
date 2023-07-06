import inquirer from 'inquirer';
import path from 'path';
import * as fs from 'fs';
const leer = [
	{
		type: 'input',
		message: 'Enter project name',
		name: 'nameProject',
		default: 'back-end',
		placeholder: 'Enter project name',
		validate(value: any) {

			if (value.length === 0) {
				return 'Please enter your name';
			}

			const isExistsProjects = fs.existsSync(path.resolve(value));

			if (isExistsProjects) {
				return 'The project name already exists';
			}

			return true;
		},
	},
];

export const nameProjectInput = async (): Promise<string> => {
	const { nameProject }: { nameProject: string } = await inquirer.prompt(leer);
	return nameProject;
};
