// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        ype: 'editor',
        name: 'description',
        message: 'Please provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'editor',
        name: 'dependencies',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the steps required to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials,include links to those here as well.?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors, and instructions for contributing?',
    },
    {
        type: 'list',
        name: 'license',
        message:
          'Choose a license (if project is open sourced, please choose 'none' from the list below).',
        choices: ["Apache 2.0", "GNU GPLv3", "MIT", "BSD 3", "None"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
  ])


.then((data) => {
    const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Successfully generated a README file')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)=> {
        fs.writeFile('README1.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
