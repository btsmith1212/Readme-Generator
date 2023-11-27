// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return `[MIT License](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "Artistic":
      return `[Artistic License](https://opensource.org/licenses/Artistic-2.0)`;
    case "BSD":
      return `[BSD License](https://opensource.org/license/bsd-3-clause/)`;
    case "GPL":
      return `[GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    default:
      return "";
  }
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `This project is licensed under the ${license} license.`;
  }
  return "";
}

// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}
  ## Credits
  ${data.credits}
`;
}

module.exports = generateMarkdown;
