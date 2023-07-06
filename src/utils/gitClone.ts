import execa from 'execa';
import path from 'path';
import ora from 'ora';
import * as fs from 'fs';
export const gitClone = async (nameProject:string) => {
	const spinner = ora('Clone and Install').start();


	const isExistsProjects=fs.existsSync(path.resolve(nameProject));

	if(isExistsProjects){
		spinner.fail('The project name already exists');
		return
	}
	
	await execa('git clone', ['https://github.com/asmel2020/template-nest.git',nameProject]);
	spinner.succeed('Clone and Install');
}

