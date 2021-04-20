// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![mit](https://img.shields.io/badge/license-MIT-yellow)`
  } else if (license === 'APACHE 2.0') {
    return `![apache](https://img.shields.io/badge/license-APACHE%202.0-orange)`
  } else if (license === 'GPL 3.0') {
    return `[gpl](https://img.shields.io/badge/license-GPL%203.0-green)`
  } else if (license === 'BSD 3') {
    return `[bsd](https://img.shields.io/badge/license-BSD%203-blue)`
  } else if (license === 'None') {
    return ``
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT license]( https://opensource.org/licenses/MIT)`
  } else if (license === 'APACHE 2.0') {
    return `[APACHE 2.0 license]( http://www.apache.org/licenses/LICENSE-2.0)`
  } else if (license === 'GPL 3.0') {
    return `[GPL 3.0 license]( https://www.gnu.org/licenses/gpl-3.0.en.html)`
  } else if (license === 'BSD 3') {
    return `[BSD 3 license]( https://opensource.org/licenses/BSD-3-Clause)`
  } else if (license === 'None') {
    return ``
  };
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return ` A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. `
  } else if (license === 'APACHE 2.0') {
    return ` A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  } else if (license === 'GPL 3.0') {
    return ` Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. `
  } else if (license === 'BSD 3') {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent. `
  } else if (license === 'None') {
    return ``
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  
  ## Description
  ${data.description}
  
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  
  - What was your motivation?
  - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
  - What problem does it solve?
  - What did you learn?
  
  ## Table of Contents (Optional)
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [License](#license)
  
  ## Installation
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  To install necessary dependencies, run the following command:
  > npm i ${data.dependecies}
  
  ## Tests
  To run tests, run the following command:
  > npm test ${data.test}
  
  
  ## Usage
  Provide instructions and examples for use. Include screenshots as needed.
  To add a screenshot, create an "assets/images" folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.
   
  ${data.usage}

  ## Credits
  List your collaborators, if any, with links to their GitHub profiles.
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  If you followed tutorials, include links to those here as well.

  ${data.credits}

  ##Contributions
  ${data.contributors}

  ## License
  This project is licensed under ${renderLicenseLink(data.liscense)}.


  ##Questions

  If you have any questions or concerns, contact the project creator at ${data.email}.
  GitHub profile page is [${data.github}](https://github.com/tlillysib).
`;
}

module.exports = generateMarkdown;
