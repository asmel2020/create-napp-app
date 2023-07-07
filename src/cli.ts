#!/usr/bin/env node
import inquirer from 'inquirer';
import { gitClone, nameProjectInput, selectQuestions } from './utils';

const startProcess = async () => {
	const { templateRepository } = await inquirer.prompt(selectQuestions);

	const nameProject = await nameProjectInput();

	gitClone(templateRepository, nameProject);
};

startProcess();
