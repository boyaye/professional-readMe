const { table } = require("console");
const fs = require("fs");

const inquired = require("inquirer");

// const NewReadme = ({title, Section, table, install, usege, contibution, license, text, question}) =>


// console.log(NewReadme)
// `
// # professional-readMe


// # Title of my project 

// -${title}
// # sections entitled Description

// -${Section}
// # Table of Contents

// -${table}
//  # Installation

//  -${install}
//  # Usage 

//  -${usege}
//  # License

//  -${license}
// # Contributing

// -${contibution}
// # Tests
// -${text}
// # Questions

// -${question}

// `

inquired
  .prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter an explanation how to install the software, or commands for the program.",
    },
    {
        type: "input",
        name: "usage",
        message: "Please describe how we can use this program/project.",
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Apache 2.0",
            "Boost Software 1.0",
            "MIT",
            "Mozilla",
        ],
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project.",
    },
  ])
  .then((response) => {
    const htmlPageContent = JSON.stringify(response);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });