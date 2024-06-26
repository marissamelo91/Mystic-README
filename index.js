//include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


//array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    {
        type: 'input',
        name: 'keyFeatures',
        message: 'Write a short description about your project.',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How do you install your Project?',
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for using your project?',
    },

    {
        type: "input",
        message: "Provide instructions for testing your project.",
        name: "test",
    },

    {
        type: 'input',
        name: 'credits',
        message: 'List contributions',
        
    },

    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "GPLv3", "GPL", "None"],
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

//function to write README file
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

//function to initialize app
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

//function call to initialize app
init();
