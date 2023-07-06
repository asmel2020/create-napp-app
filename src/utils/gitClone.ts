import execa from 'execa';
import ora from 'ora';
export const gitClone = async (nameProject:string) => {
	const spinner = ora('Clone and Install').start();
	await execa('git clone', ['https://github.com/asmel2020/template-nest.git',nameProject]);
	spinner.succeed('Clone and Install');
}

