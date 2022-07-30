// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let selectedBadge = license
  if (selectedBadge === 'MIT') {
    return '![License: MIT](https://img.shields.io/badge/license-MIT-green)'
  } else if (selectedBadge === 'Apache') {
    return '![License: Apache](https://img.shields.io/badge/license-Apache-blue)'
  } else if (selectedBadge === 'GPL ') {
    return '![License: GPL](https://img.shields.io/badge/license-GPL-yellow)'
  } else {
    return 'No License Selected';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL ') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else {
    return 'No License Selected';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the terms of the MIT License.'
  } else if (license === 'Apache') {
    return 'This project is licensed under the terms of the Apache License.'
  } else if (license === 'GPL ') {
    return 'This project is licensed under the terms of the GPL License.'
  } else {
    return 'No License Selected';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description 
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  <br>
  ## Usage 
  ${data.usage} 
  <br>
  ## License 
  ${renderLicenseSection(data.license)} <br>
  ${renderLicenseLink(data.license)}
  <br>
  ## Contributing 
  ${data.contribution}
  <br>
  ## Tests
  ${data.test}
  <br>
  ## Questions
  If you have any questions about this project, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.


`;
}

module.exports = generateMarkdown;
