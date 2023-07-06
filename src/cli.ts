#!/usr/bin/env node

/* import path from 'path'; */
//import { program } from 'commander';
/* import chalk from 'chalk'; */
import inquirer from 'inquirer';
import { gitClone, nameProjectInput } from './utils';


const questions = [
	{
		type: 'list',
		name: 'opt',
		message: 'Select a template de NestJS',
		choices: [
			{
				value: '1',
				name: 'RestFull',
			},
		],
	},
];


const startProcess = async () => {
	const { opt } = await inquirer.prompt(questions);

	if (opt === '1') {
		const nameProject= await nameProjectInput();

		gitClone(nameProject);
		return
	}
};

startProcess();
/* program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();

console.log(options); */
/* const startProcess =async () => {
	// @ts-ignore
	const {stdout} = await execa('git clone', ['https://github.com/asmel2020/template-nest.git']);

	console.log(stdout);

}

startProcess(); */
