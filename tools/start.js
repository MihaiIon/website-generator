// ======================================================
// Tools / Config
// ======================================================

"use strict";

const chalk = require("chalk");
const inquirer = require("inquirer");
const { spawn } = require("child_process");
const { getProjects, updateLoadedProject } = require("./_helpers");

const { prompt, Separator } = inquirer;
const createSeparator = () => new Separator();
const getProjectAvailability = array =>
  array.length > 0 ? "" : chalk.dim("\n  -- no projects --");

// TYPES
// ======================================================

const TYPES = {
  CONFIRM: "confirm",
  INPUT: "input",
  LIST: "list",
  RAW_LIST: "rawlist"
};

// Main Question
// ======================================================

const mainInterface = async () => {
  const choices = [
    "Select and Load Project",
    "Select and Build Project",
    "Create and Start Project",
    `${chalk.red("x")} Exit`
  ];

  let { choice } = await prompt({
    type: TYPES.LIST,
    name: "choice",
    message: "What do you wish to do?",
    choices
  });

  switch (choice) {
    case choices[0]:
      return projectInterface;
    case choices[1]:
      return async () => await projectInterface(true);
    case choices[2]:
      return createProjectInterface;
    default:
      return null;
  }
};

// Load/Build Project
// ======================================================

const projectInterface = async isBuild => {
  const projects = getProjects();
  const choices = projects.concat([
    createSeparator(),
    `${chalk.yellow("<")} Back`,
    `${chalk.red("x")} Exit`
  ]);

  let isProject = false;
  let { choice } = await prompt({
    type: TYPES.LIST,
    name: "choice",
    message: `Which project do you want to build?${getProjectAvailability(projects)}`,
    choices,
    filter: value => {
      isProject = projects.reduce((cond, name) => cond || name === value, false);
      return value;
    }
  });

  // Back or Exit
  if (!isProject) {
    switch (choice) {
      case choices[projects.length + 1]:
        return mainInterface;
      default:
        return null;
    }
  }

  // Build selected project
  await updateLoadedProject(choice);
  spawn("node", [`./tools/${isBuild ? "build" : "load"}.js`], { stdio: "inherit" });
  return null;
};

// Create Project Wizard
// ======================================================

const createProjectInterface = async () => {
  return null;
};

// Run Configuration Wizard
// ======================================================

console.log(`\nWelcome to the configuration ${chalk.green("wizard")}.`);
console.log("======================================\n");

(async () => {
  let fn = mainInterface;
  while (fn != null) {
    fn = await fn();
  }
})();
