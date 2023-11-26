const fs = require("fs");
// Created a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
      license
    )})`;
  }
  return badge;
}
// Created a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;

  switch (license) {
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GPL":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD2":
      licenseLink = "https://choosealicense.com/licenses/bsd-2-clause/";
      break;
    case "BSD3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "CCommons":
      licenseLink =
        "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
      break;
    case "Eclipse":
      licenseLink = "https://www.eclipse.org/legal/epl-2.0/";
      break;
    case "GPL3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "GPL2":
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GLPL":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.en.html";
      break;
    case "Mozilla":
      licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    case "Unlicense":
      licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;
    default:
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// Created a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license != "None") {
    licenseSection += "## License\n";
    licenseSection +=
      "Please see " +
      renderLicenseLink(license) +
      " to get detailed information for this license\n";
  }
  return licenseSect;
}

function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://lbesson.mit-license.org/`;
  }
  if (license === "GPL") {
    return `http://perso.crans.org/besson/LICENSE.html`;
  }
  if (license === "CC--0") {
    return `https://creativecommons.org/licenses/by-nd/4.0`;
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
  }
}
// Created a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
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
  ${renderLicenseSection(data.licenses)}
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
