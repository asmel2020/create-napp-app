import execa from 'execa';
import path from 'path';
import ora from 'ora';
import * as fs from 'fs';
export const gitClone = async (nameProject:string) => {
	console.log();
	const spinner = ora('Installation in progress... ☕').start();


	const isExistsProjects=fs.existsSync(path.resolve(nameProject));

	if(isExistsProjects){
		spinner.fail('The project name already exists');
		return
	}

	await execa('git clone', ['https://github.com/asmel2020/template-nest.git',nameProject]);

	spinner.succeed();
	console.log();
	console.log(`🚀  Successfully created project ${nameProject}`);
	console.log('👉  Get started with the following commands:');
	console.log();
	console.log(`$ cd ${nameProject}`);
	console.log('$ npm install or yarn');
	console.log('$ yarn run start');
	console.log();
}

