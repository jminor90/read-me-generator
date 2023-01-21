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

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log("This is the generate Markdown Func")
  console.log(answers)
  console.log("This is the generate Markdown Func")

  fs.writeFile('log.txt', `${answers.userName}; ${answers.userChoice}; ${answers.userContact}`, (err) => {
    err ? console.error(err) : console.info('Success Captain!')
  })

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
