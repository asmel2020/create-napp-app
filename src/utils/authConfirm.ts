import inquirer from 'inquirer';

const auth=[{
	type: 'confirm',
	name: 'isAuth',
	message: 'Does your project require authentication?',
	default: true,
}]

export const authConfirm = async (): Promise<boolean> => {
	const { isAuth } = await inquirer.prompt(auth);
	return isAuth;
}