function renderLicenseBadge(data) {
	let licenseBadge = ``;
	let dataBadge = data.userLicense
	
  if (dataBadge === `MIT`) {
    licenseBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`
    return licenseBadge
  } else if (dataBadge === `GNU GPLv3`) {
    licenseBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`
    return licenseBadge
  } else if (dataBadge === `Apache 2.0`) {
    licenseBadge = `https://img.shields.io/badge/License-Apache_2.0-blue.svg`
    return licenseBadge
  } else if (dataBadge === `Mozilla 2.0`) {
    licenseBadge = `https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg`
    return licenseBadge
  } else {
    licenseBadge = `https://img.shields.io/badge/license-Unlicense-blue.svg`
  }
}

function renderLicenseLink(data) {
  let licenseLink = ``;

  let dataLicense = data.userLicense

  if (dataLicense === `MIT`) {
    licenseLink = `https://opensource.org/licenses/MIT`
    return licenseLink;
  } else if (dataLicense === `GNU GPLv3`) {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
    return licenseLink;
  } else if (dataLicense === `Apache 2.0`) {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
    return licenseLink;
  } else if (dataLicense === 'Mozilla 2.0') { 
    licenseLink = `https://opensource.org/licenses/MPL-2.0`
    return licenseLink
  } else {
    licenseLink = `https://unlicense.org/`
    return licenseLink
  }
}

function generateMarkdown(data) {
  return `
# ${data.userTitle}

[![License: ${data.userLicense}](${renderLicenseBadge(data)})](${renderLicenseLink(data)})



## Description
${data.userDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)

## Installation
You may need to install the following packages...

${data.userInstallation}

## Usage
Link to Application: https://${data.userURL}

${data.userUsage}

## Tests
${data.userTests}

## Credits
${data.userCredits}



## Questions?

- Github: https://github.com/${data.userName}

- Email: ${data.userEmail}

`;
}

module.exports = {
  generateMarkdown,
};
