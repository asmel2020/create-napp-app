import execa from 'execa';
import ora from 'ora';
import chalk from 'chalk';

import { listRepository } from './listRepository';

export const gitClone = async (templateRepository:string,nameProject:string) => {


	const urlRepository=await listRepository(templateRepository);
	console.log();
	
	const spinner = ora('Installation in progress... ☕').start();

	await execa('git clone', [urlRepository,nameProject]);

	spinner.succeed();
	console.log();
	console.log(`🚀  Successfully created project ${chalk.blueBright(nameProject)}`);
	console.log('👉  Get started with the following commands:');
	console.log();
	console.log(`$ cd ${nameProject}`);
	console.log('$ npm install');
	console.log('$ npm run start');
	console.log(`
	
			${chalk.blue('Thanks for installing NAPP 🙏')}
		Please consider donating to our open collective
			to help us maintain this package.


  	     🍷  ${chalk.white.bold('Donate:')} {site web}
	
	`);
}

