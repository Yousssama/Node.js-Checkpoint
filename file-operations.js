const fs = require('fs');

// Create a file named "welcome.txt" containing "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
    if (err) throw err;
    console.log('File created: welcome.txt');
});

// Read and console.log the content of "welcome.txt"
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File content:', data);
});
