// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your name?',
        type: 'input',
        name: 'userName'
    },
    {
        message:'Star Wars or Star Trek?',
        type: 'checkbox',
        choices: [
            'Star Wars',
            'Star Trek',
        ],
        name: 'userChoice',
    },
    {
        message: 'Preferred means of contact?',
        type: 'list',
        choices: [
            'Email',
            'Phone',
            'SMS'
        ],
        name: 'userContact',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then ((answers) => {

        generateMarkdown.generateMarkdown(answers);
    })

}

// Function call to initialize app
init();

