const inquirer = require("inquirer");
const fs = require("fs");
// Included packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown.js");

// Created an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please type project title:",
    name: "title",
  },
  {
    type: "input",
    message: "Please write project description:",
    name: "description",
  },
  {
    type: "input",
    message: "Please describe how to install your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe how this project is used:",
    name: "usage",
  },
  {
    type: "input",
    message: "Please describe how others can contribute to your project:",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "Please list how to test your project/include any tests already written:",
    name: "tests",
  },
  {
    type: "input",
    message: "Please list anyone you would like to credit:",
    name: "credits",
  },
  {
    type: "input",
    message: "Please enter your github username so people can see your work:",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email so people can reach out to you:",
    name: "email",
  },
  {
    type: "list",
    message: "Please choose a license for your project:",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause Simplified License",
      "BSD 3-Clause New/Revised License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
    name: "license",
  },
];

// Created a function to write README file
const writeFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: console.log("README generated!"),
      });
    });
  });
};

// Created a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
init()
  .then((userInput) => {
    return generateMarkdown(userInput);
  })
  .then((readmeInfo) => {
    return writeFile(readmeInfo);
  })
  .catch((err) => {
    console.log(err);
  });
