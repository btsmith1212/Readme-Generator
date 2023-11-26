const inquirer = require("inquirer");
const fs = require("fs");
// Included packages needed for this application

const questions = [
    {
        type: 'input',
        message: "Please type project title:",
        name: 'title',
    },
    {
        type: 'input',
        message: "Please write project description:",
        name: 'description',
    },
    {
        type: 'input',
        message: "Please describe how to install your project:",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please describe how this project is used:",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please describe how others can contribute to your project:",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Please list how to test your project/include any tests already written:",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Please choose a license for your project:",
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New/Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license'
    }
    // Created an array of questions for user input



]


function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log('Success!');
    });
}
// Created a function to write README file

async function init() {
    try{
        const userResponse = await inquirer.prompt(questions);
        console.log('Your Response: ', userResponse);

        const markdown = generateMarkdown(userResponse, userInfo);
        console.log(markdown);

        await writeFileAsync('ExampleREADME.md', markdown);

    
    } catch  (error) {
        console.error();
    }
// Created a function to initialize app

}

init();
// Function call to initialize app
