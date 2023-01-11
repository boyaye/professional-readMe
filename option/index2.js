function CreateMark(data) {

let licenseOpt = `${data.license}`
let licenseLink = "";

if(licenseOpt === "GNU AGPLv3") {
licenseOpt = "GNUAGPLV3";
licenseLink = "https://choosealicense.com/licenses/agpl-3.0/"
};
if (licenseOpt === 'GNU GPLv3') {
    licenseOpt = 'GNUGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/gpl-3.0/';
  };
  if (licenseOpt === 'GNU LGPLv3') {
    licenseOpt = 'GNULGPLv3';
    licenseLink = 'https://choosealicense.com/licenses/lgpl-3.0/';
  };
  if (licenseOpt === 'Mozilla Public License 2.0') {
    licenseOpt = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licenseOpt === 'Apache License 2.0') {
    licenseOpt = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licenseOpt === 'MIT License') {
    licenseOpt = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };
  if (licenseOpt === 'Boost Software License 1.0') {
    licenseOpt = 'BoostSoftwareLicense1.0';
    licenseLink = 'https://choosealicense.com/licenses/bsl-1.0/';
  };
  if (licenseOpt === 'The Unlicense') {
    licenseOpt = 'TheUnlicense';
    licenseLink = 'https://choosealicense.com/licenses/unlicense/';
  };


let Template = 

  `# ${data.title}

  ## Description

${data.description}

![badge](https://img.shields.io/badge/license-${licenseOpt}-brightorange)

You can access more badges and their purposes at [shields.io](https://shields.io)

`;

let tableOfContents = 
`## Table of Contents`;
if (data.installation) {
    tableOfContents +=
      `
  * [Installation](#installation)`
  };
  if (data.instructions) {
    tableOfContents +=
      `
  * [Usage](#usage)`
  };
  if (data.contribution) {
    tableOfContents +=
      `
  * [Contribution](#contribution)`
  };
  if (data.testing) {
    tableOfContents +=
      `
  * [Testing](#testing)`
  };

  Template += tableOfContents;


  Template +=
    `
  * [Questions](#questions)`;
    Template +=
    `
  * [License](#license)
    
    `;

  if (data.installation) {
    Template +=
      `
## Installation
    
  _Follow these steps to properly install this application:_

  ${data.installation}`
  };

 
  if (data.instructions) {
    Template +=
      `
      
## Usage

  _Instructions for use:_

  ${data.instructions}`
  };

 
  if (data.contribution) {
    Template +=
      `
      
## Contribution

  _If you would like to contribute, please adhere to these guidelines:_

  ${data.contribution}`
  };

  if (data.testing) {
    Template +=
      `
      
## Testing

  _Instructions for testing application:_

  ${data.testing}`
  };

  Template +=
      `
      
## Questions
      
  _For further questions:_

  ${data.questions}
  
  _Contact Info:_

  GitHub: [${data.username}](https://github.com/${data.username})

  Email: [${data.email}](mailto:${data.email})`;
  
  Template +=
    `
    
## License

      
  _This application has the ${data.license}._
      
  For more information please view the [license description](${licenseLink}).
  
  `;
  return Template;
}


module.exports = CreateMark;