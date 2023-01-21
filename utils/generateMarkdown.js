const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile(`${data.userTitle}-README.md`, 
`
# ${data.userTitle}

![${data.userTitle}](https://img.shields.io/github/license/${data.userName}/${data.userTitle})

## Description
${data.userDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)

## Installation
${data.userInstallation}

## Usage
Link to Application: ${data.userURL}

${data.userUsage}

## Tests
${data.userTests}

## Credits
${data.userCredits}

## License

${data.userLicense}


## Questions?

- Github: https://github.com/${data.userName}

- Email: ${data.userEmail}


`, //https://img.shields.io/github/license/jminor90/the-translator
(err) => {
    err ? console.error(err) : console.info('Success Captain!')
  })
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log("This is the generate Markdown Func")
  console.log(answers)
  console.log("This is the generate Markdown Func")

  writeToFile(answers)

  /*
  return `# ${data.title}

`;
*/
}


function testFunction (answers) {
  console.log("This is the Test Function")
  console.log(answers)
}

module.exports = {
  generateMarkdown,
  testFunction,
};
