// LESSON CODE
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
      type: "input",
      name: "license",
      message: "Choose your license: ",
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
  # ${uAnswers.tittle}

## Description

${uAnswers.description}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${uAnswers.install}

## Usage

${uAnswers.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

${uAnswers.contributing}

## Tests

${uAnswers.test}
  `;

uPrompt()
  .then((uAnswers) => writeFileAsync("README.md", generateREADME(uAnswers)))
  .then(() => console.log("Generating README.."))
  .catch((err) => console.error(err));
