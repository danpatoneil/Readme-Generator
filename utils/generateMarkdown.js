// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case 'MIT':
            return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
            break;
        case 'Mozilla':
            return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
            break;
        case 'CC BY-ND':
            return '![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)';
            break;
        default:
            return '';
            break;
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
            break;
        case 'Mozilla':
            return 'https://opensource.org/licenses/MPL-2.0';
            break;
        case 'CC BY-ND':
            return 'https://creativecommons.org/licenses/by-nd/4.0/';
            break;
        default:
            return '';
            break;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license) return '';
    else return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown =  `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Badges](#badges)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Contact Me](#contact)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Badges
  ${`[${renderLicenseBadge(data.license)}](${renderLicenseLink(data.license)})`}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}`;
  if(data.github || data.email) {
    markdown += `

  ## Contact`;
    if(data.github){
        markdown+= `
  My github is [${data.github}](https://github.com/${data.github})
  `;
    }
    if(data.email){
        markdown+= `

   My email is is ${data.email}`;
    }
  }
  markdown += `

  ## License
  This project is published under the [${data.license}](${renderLicenseLink(data.license)}) license`;
  return markdown;
}

module.exports = generateMarkdown;
