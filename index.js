// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
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
            message: 'How can users contribute to this project?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'How do users test this project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a copyright license for your project.',
            choices: ['MIT', 'Apache', 'GPL', 'None of the above']
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
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README.md file has been generated!")
    });
}

// TODO: Create a function to initialize app
questionsPrompt()
    .then(promptData => generateMarkdown(promptData))
    .then(data => writeToFile(data))
    .catch(err => {
        console.log(err)
    });