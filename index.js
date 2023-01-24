const inquirer = require ('inquirer');
const fs = require('fs');
const generateMarkdown = require ('./utils/generateMarkdown')


const questions = [
    {
        message: 'Enter the title of project?\n(Titles with multiple words should be separated-like-this)',
        type: 'input',
        name: 'userTitle'
    },

    {
        message: 'Enter a short description of project.',
        type: 'input',
        name: 'userDescription'
    },

    {
        message: 'Choose a license:',
        type: 'list',
        choices: [
            'MIT',
            'GNU GPLv3',
            'Apache 2.0',
            'Mozilla 2.0',
            'None'
        ],
        name: 'userLicense'
    },

    {
        message: 'Enter any required Installation Packages.',
        type: 'input',
        name: 'userInstallation',
    },

    {
        message: 'Enter Usage Instructions.',
        type: 'input',
        name: 'userUsage',
    },

    {
        message: 'Enter URL to deployed application.\n (https:// not required)',
        type: 'input',
        name: 'userURL',
    },

    {
        message: 'Enter relevant tests:',
        type: 'input',
        name: 'userTests'
    },

    {
        message: 'Enter Contributors:',
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


function writeToFile(fileName, data) {
    const contents = generateMarkdown.generateMarkdown(data);

fs.writeFileSync(fileName, contents, console.log('File Written Successfully!'))
}


function init() {
    inquirer
        .prompt(questions)
        .then(answers => {writeToFile(`${answers.userTitle}-README.md`, answers)}) 
        .catch(error => {console.error(`UH-OH: ${error}`)
        })
}

init();