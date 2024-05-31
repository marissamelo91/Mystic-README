// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseType) {
  if (licenseType === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if (licenseType === 'GPLv3') {
    return '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else if (licenseType === 'GPL') {
    return '![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)';
  } else {
   
    return '';
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "gpl-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    default:
      return "License link not found.";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by ${renderLicenseBadge(license)}(${renderLicenseLink(license)}).`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Key Features
  ${data['key-features']}
  
  ### Table of Contents
  * [Key Features](#key-features)
  * [Install](#install)
  * [Credits](#credits)
  * [License](#license)
  * [GitHub](#github)
  
  ### Install
  ${data.install}

  ### Credits
  ${data.credits}

  ### License
  ${renderLicenseSection(data.license)}

  ### GitHub
  [${data.github}](https://github.com/${data.github})
  
`;
}

module.exports = generateMarkdown;
