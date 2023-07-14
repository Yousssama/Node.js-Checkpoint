const generatePassword = require('generate-password');


const password = generatePassword.generate();

console.log('Generated password:', password);
