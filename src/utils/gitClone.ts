import execa from 'execa';

export const gitClone = async (nameProject:string) => {


	await execa('git clone', ['https://github.com/asmel2020/template-nest.git',nameProject]);
	await execa('cd', [`${nameProject}`]);
	await execa('npm install');
	await execa('git remote rm origin');
	//await execa("git", ["https://github.com/asmel2020/template-nest.git"]);
}

