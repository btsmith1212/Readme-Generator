
function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }

  return badge;
}
// Created a function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string

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
      licenseLink = "https://creativecommons.org/publicdomain/zero/1.0/legalcode";
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


function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## License\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSect;
}
//Created a function that returns the license section of README
//If there is no license, returns an empty string

function generateMarkdown(data) {
  const sections = ["title", "description", "installation", "usage", "contributing", "tests", "license"];

  let markdown = "# " + data.title + "\n";

  markdown += renderLicenseBadge(data.license) + "\n";

  markdown += "## Table of Contents\n";
  for (let i=0; i<sections.length; i++) {
    if (! (sections[i] === "license" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toLowerCase() + sections[i].substring(1) + ")\n";
    }
  }
  markdown += "\n";

  markdown += "## " + sections[0] + "\n";
  markdown += data.title + "\n";

  markdown += "## " + sections[1] + "\n";
  markdown += data.description + "\n";

  markdown += "## " + sections[2] + "\n";
  markdown += data.installation + "\n";

  markdown += "## " + sections[3] + "\n";
  markdown += data.usage + "\n";

  markdown += "## " + sections[4] + "\n";
  markdown += data.contributing + "\n";

  markdown += "## " + sections[5] + "\n";
  markdown += data.tests + "\n";


  markdown += renderLicenseSection(data.license) + "\n";

  return markdown;
}
//Created a function to generate markdown for README

module.exports = generateMarkdown;
//Exported markdown
