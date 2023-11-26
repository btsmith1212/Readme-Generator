// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `[![License](https://img.shields.io/badge/license-${license}-blue.svg)](./LICENSE)`;
  }
  return "";
}
// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0.html)`;
    case "GPL":
      return `[GPL License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case "MIT":
      return `[MIT License](https://mit-license.org/)`;
    case "BSD2":
      return `[BSD2](https://choosealicense.com/licenses/bsd-2-clause/)`;
    case "BSD3":
      return `[BSD3 License](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Boost":
      return `[Boost License](https://www.boost.org/LICENSE_1_0.txt)`;
    case "CCommons":
      return;
      `[CCommons License](https://creativecommons.org/publicdomain/zero/1.0/legalcode)`;
    case "Eclipse":
      return `[Eclipse License](https://www.eclipse.org/legal/epl-2.0/)`;
    case "GPL3":
      return `[GPL3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
    case "GPL2":
      return `[GPL2 License](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case "GLPL":
      return `[GLPL License](https://www.gnu.org/licenses/lgpl-3.0.en.html)`;
    case "Mozilla":
      return `[Mozilla License](https://www.mozilla.org/en-US/MPL/2.0/)`;
    case "Unlicense":
      return `[Unlicense License](https://choosealicense.com/licenses/unlicense/)`;
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
