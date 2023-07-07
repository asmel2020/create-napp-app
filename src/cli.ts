#!/usr/bin/env node
import inquirer from "inquirer";
import { gitClone, nameProjectInput, questions } from "./utils";

const startProcess = async () => {
  const { templateRepository } = await inquirer.prompt(questions);
  const nameProject = await nameProjectInput();
  gitClone(templateRepository, nameProject);
};

startProcess();
