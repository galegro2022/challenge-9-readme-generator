// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {type:'input',
     message: 'what is your github username?',
     name: 'username',
    },
     
    {type:'input',
     message:'what is your email',
     name: 'email',
    },

    {type:'input',
     message:'what is the title of your project',
     name: 'title',

    },

    {type: 'input',
     message: 'what was your motivation to build this project',
     name: 'motivation',
    
    },

    {type:'input',
     message: 'why did you build this project',
     name: 'project',
    },
    
    {type:'input',
     message: 'what problem does it solve',
     name: 'problem',
    },

    {type:'input',
     message:'what did you learn',
     name: 'learn',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
    fs.writeFile('Readme.md',generateMarkdown(answers), (err) => {
        err ? console.log(err) : console.log('README sucessfully created!')
    })

})
};

// Function call to initialize app
init();
