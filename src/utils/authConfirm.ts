import inquirer from 'inquirer';

const auth=[{
	type: 'confirm',
	name: 'isAuth',
	message: 'Do you want to delete the .git folder?',
	default: true,
}]

export const authConfirm = async (): Promise<boolean> => {
	const { isAuth } = await inquirer.prompt(auth);
	return isAuth;
}