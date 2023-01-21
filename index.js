// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Title of project?',
        type: 'input',
        name: 'userTitle'
    },

    {
        message: 'Enter a short Description of project',
        type: 'input',
        name: 'userDescription'
    },

    {
        message: 'Choose a license',
        type: 'list',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Apache License 2.0',
            'None'
        ],
        name: 'userLicense'
    },

    {
        message: 'Enter Installation instructions',
        type: 'input',
        name: 'userInstallation',
    },

    {
        message: 'Enter URL to deployed application',
        type: 'input',
        name: 'userURL',
    },

    {
        message: 'Enter Usage Instructions',
        type: 'input',
        name: 'userUsage',
    },

    {
        message: 'Enter relevant tests',
        type: 'input',
        name: 'userTests'
    },

    {
        message: 'Enter Contributors',
        type: 'input',
        name: 'userCredits'
    },

    {
        message: 'What is your Github Username?',
        type: 'input',
        name: 'userName'
    },

    {
        message: 'What is your email address?',
        type: 'input',
        name: 'userEmail'
    },

];



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => {

        generateMarkdown.generateMarkdown(answers);
    })

}

// Function call to initialize app
init();

