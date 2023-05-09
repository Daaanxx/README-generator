// TO DO
//
// Stoped at TEST section
// Add multiple option choices for licensec
//
//
// CODE!
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const uPrompt = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "tittle",
      message: "What's your project tittle?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide your's project description: ",
    },
    {
      type: "input",
      name: "install",
      message: "Installation information: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Usage information:  ",
    },
    {
      type: "input",
      name: "contributing",
      message: "Let users know how to contribute to your project: ",
    },
    {
      type: "input",
      name: "test",
      message: "Let users know how to test/run your application:  ",
    },
    {
      type: "list",
      name: "license",
      message: "Choose your license: ",
      choices: [
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
      ],
    },
    {
      type: "input",
      name: "gitUsername",
      message: "What is your GitHub username? ",
    },
    {
      type: "input",
      name: "email",
      message: "What is your e-mail?",
    },
  ]);

const generateREADME = (uAnswers) =>
  `
  ## Project Tittle

   ${uAnswers.tittle}

  ## Table of Contents 


  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)

## Description

${uAnswers.description}

## Installation

${uAnswers.install}

## Usage

${uAnswers.usage}

## License

${uAnswers.license}

## How to Contribute

${uAnswers.contributing}

## Tests

${uAnswers.test}

## Questions

In case of any qestion please reach out to my by using my email: ${uAnswers.email}, or contact me on GitHub ${uAnswers.gitUsername}.
  `;

uPrompt()
  .then((uAnswers) => writeFileAsync("README.md", generateREADME(uAnswers)))
  .then(() => console.log("Generating README.."))
  .catch((err) => console.error(err));
