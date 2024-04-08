// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown');
const { type } = require('os');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the name of this project?',
    'Please describe it',
    'How can users install this project, and what else might they need to have installed make it work properly',
    'Describe how the project should be used',
    'Describe how others can contribute to this product to improve it for future users',
    'How can users run tests on this project',
    'Which license would you like to publish this project under',
    'If you would like to, please enter your Github username',
    'If you would like to, please enter your email address so interested users can contact you'
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contribute',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'test',
                message: questions[5]
            },
            {
                type: 'list',
                message: questions[6],
                name: 'license',
                choices: ['MIT', 'Mozilla', 'CC BY-ND']
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7]

            },
            {
                type: 'input',
                name: 'email',
                message: questions[8]

            }
        ])
        .then((data) => {
            const fileData = generateMarkdown(data);
            const fileName = `README.md`
            fs.writeFile(fileName, fileData, (err) => {
                err ? console.log(err) : console.log(`${fileName} created`)
            });
        });
}

// Function call to initialize app
init();
