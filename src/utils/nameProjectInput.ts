import inquirer from 'inquirer';

const leer = [
	{
		type: 'input',
		message: 'Enter project name',
		name: 'nameProject',
		default: 'back-end',
		validate(value:any) {
			console.log(value);
			if (value.length===0) {
				return 'Please enter your name';
			} 
			return true;
		}
	}
]



export const nameProjectInput = async ():Promise<string> => {
	const { nameProject }:{nameProject:string} = await inquirer.prompt(leer);
	return nameProject;
}