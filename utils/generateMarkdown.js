//function that returns a license badge based on which license is passed in
//if there is no license, return an empty string
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


//function that returns the license link
//If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license.toLowerCase()) {
    case "mit":
      return "https://opensource.org/licenses/MIT";
    case "gplv3":
      return "https://www.gnu.org/licenses/gpl-3.0.html";
    case "gpl":
      return "https://www.gnu.org/licenses/old-licenses/old-licenses.html#GPL";
    default:
      return "";
  }
}

//function that returns the license section of README
//if there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  }
  return `This application is covered by ${renderLicenseBadge(license)}(${renderLicenseLink(license)}).`;
}


//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Key Features
  ${data.keyFeatures}
  
  ## Table of Contents
  * [Key Features](#key-features)
  * [Install](#install)
  * [Usage](#usage)
  * [Test](#test)
  * [Credits](#credits)
  * [License](#license)
  * [Github](#github)
  * [Email Address](#email)
  
  ## Install
  ${data.install}

  ## Usage
  ${data.usage}
  
  ## Test
  ${data.test}

  ## Credits
  ${data.credits}

  ## License
  ${renderLicenseSection(data.license)}

  ## Github
  https://github.com/${data.github}

  ## Email Address
  ${data.email}
`;
}

 //export the generateMarkdown function
module.exports = generateMarkdown;
