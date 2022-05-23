// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questionsPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a brief description of your project.',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log("Please give a description of your project!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide step by step instructions on how to install your project.',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log("Please provide installation instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples of how to use your project.',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log("Please provide usage instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Provide guidelines on how to contribute to your project (if any).',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide tests for your project and how to run them (if any).',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a copyright license for your project.',
            choices: ['MIT License', 'Apache License', 'GPL License', 'None']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address.'
        }
    ]);
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
questionsPrompt()
    .then(promptData => console.log(promptData));