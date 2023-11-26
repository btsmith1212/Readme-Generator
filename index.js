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
      "MIT License",
      "BSD 3-Clause New/Revised License",
      "Artistic License",
    ],
    name: "license",
  },
];

// Created a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md file generated successfully!");
    }
  });
}

// Function call to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    const markdownContent = generateMarkdown(response);
    writeToFile("README.md", markdownContent);
  });
}
init();
