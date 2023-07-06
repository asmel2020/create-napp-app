import execa from 'execa';
import path from 'path';
import ora from 'ora';
import * as fs from 'fs';
import chalk from 'chalk';
export const gitClone = async (nameProject:string) => {

	console.log();
	const spinner = ora('Installation in progress... ☕').start();


	const isExistsProjects=fs.existsSync(path.resolve(nameProject));

	if(isExistsProjects){
		spinner.fail('The project name already exists');
		return
	}

	await execa('git clone', ['https://github.com/asmel2020/NAPP-REST.git',nameProject]);

	spinner.succeed();
	console.log();
	console.log(`🚀  Successfully created project ${chalk.blueBright(nameProject)}`);
	console.log('👉  Get started with the following commands:');
	console.log();
	console.log(`$ cd ${nameProject}`);
	console.log('$ npm install');
	console.log('$ npm run start');
	console.log(`
	
			${chalk.blue("Thanks for installing NAPP 🙏")}
		Please consider donating to our open collective
			to help us maintain this package.


  	     🍷  ${chalk.white.bold('Donate:')} {site web}
	
	`);
}

