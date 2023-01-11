const fs = require("fs");
const inquirer = require("inquirer");
const option = require("util")
const generateMake = require("./option/index2");


function validateinput(data){
    if (data != ""){
        return true;
    }else{
        return "please enter the require question"
    }
};

const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your repository?',
    validate:validateinput
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository?',
    validate:validateinput
    },
  {
    type: 'confirm',
    name: 'confirmInstallation',
    message: 'Is there an installation process?'
    },
  {
    type: 'input',
    name: 'installation',
    message: 'Please list installation instructions.',
    when: ({ confirmInstallation }) => {
      if (confirmInstallation) {
        return true;
      } else {
        return "choose the right installation";
      }
    }
  },
  
  {
    type: 'confirm',
    name: 'confirmUsage',
    message: 'Would you like to give instructions for using your application?'
  },
  { 
    type: 'input',
    name: 'instructions',
    message: 'Please list instructions for using your application.',
    when: ({ confirmUsage }) => {
      if (confirmUsage) {
        return true;
      } else {
        return "fill in your instruction";
      }
    }
  },
  
  {
    type: 'confirm',
    name: 'confirmContribution',
    message: 'May other developers contribute to your repository?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'how would you allow other developers to contribute to your project .',
    when: ({ confirmContribution }) => {
      if (confirmContribution) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'testConfirm',
    message: 'Is testing available?'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'how would other users test your application.',
    when: ({ testConfirm }) => {
      if (testConfirm) {
        return true;
      } else {
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['GNU AGPLv3', 'GNU GPLv3',
      'GNU LGPLv3', 'Mozilla Public License 2.0',
      'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
      'The Unlicense'],
    validate: validateinput
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
    validate:validateinput
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? ',
    validate:validateinput
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please list instructions for those who wish to contact you.',
    validate:validateinput
  }]; 

  function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
      if (error) {
        return console.log('Sorry there was an error : ' + error);
      }
    })
  };

  const createReadMe = option.promisify(writeToFile);

  async function init() {
    try {
      const userAnswers = await inquirer.prompt(questions);
      console.log('Thank you! Successful your request is being processed into your README.md: ', userAnswers);
      const Markdown = generateMake(userAnswers);
      console.log(Markdown);
      await createReadMe('README2.md', Markdown);
      
    } catch (error) {
      console.log('Sorry there was an error.' + error);
    }
  };
  
  
  init();