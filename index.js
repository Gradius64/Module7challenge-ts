// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// Define the initialization function
function init() {

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What languages are you learning? ', (name) => {

rl.question('How old are you? ', (age) => {

rl.question('What coffee do you like?', (coffee) => {

  console.log(`I like ${coffee}!`)
  console.log(`I am learning, ${name}!`);
  console.log(`I am ${age} years old.`);
  rl.close();
});



// TODO: Create a function to write README file
const fs = require('fs');
const path = require('path');

/**
 * Function to write a README file
 * @param {string} content - The content to write to the README file
 * @param {string} fileName - The name of the README file
 */
function writeReadme(content, fileName = 'README.md') {
    const filePath = path.join(__dirname, fileName); // Create a file path

    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.error('Error writing to README file:', err);
        } else {
            console.log(`README file has been created at ${filePath}`);
        }
    });
}

// Example usage:
const readmeContent = `# Project Title

## Description
A brief description of your project.

## Installation
Instructions for installing the project.

## Usage
How to use the project.

## Contributing
Guidelines for contributing to the project.

## License
This project is licensed under the MIT License.`;

writeReadme(readmeContent);
})})

// TODO: Create a function to initialize app
const express = require('express');
const bodyParser = require('body-parser');

// Function to initialize the application
function initializeApp() {
    const app = express();
    
    // Middleware setup
    app.use(bodyParser.json()); // To parse JSON bodies
    app.use(bodyParser.urlencoded({ extended: true })); // To parse URL-encoded bodies

    // Basic route setup
    app.get('/', (req, res) => {
        res.send('Welcome to the Application!');
    });

    // Start the server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}


// Execute the initialization function
initializeApp();


// Function call to initialize app
init();
}