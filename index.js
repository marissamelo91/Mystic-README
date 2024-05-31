// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'key-features',
        message: 'Write a short description about your project.',
    },

    // {
    //     type: 'input',
    //     name: 'table of contents',
    //     message: 'What is your Table of Contents?',
    // },

    {
        type: 'input',
        name: 'install',
        message: 'How do you Install your Project?',
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List contributions',
        
    },

    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL"],
        message: 'What type of License does your project use?',
    },

    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },

    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, error => {
            if (error) {
                reject(error);
                return;
            }

            resolve({
                ok: true,
                message: 'README File Generated!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            return generateMarkdown(answers);
        })
        .then(pageMarkdown => {
            writeToFile('./README.md', pageMarkdown);
            console.log('README.md created!')
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
