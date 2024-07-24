const path = require('path');

// join method is used to join 2 url's
const fileName = path.join(__filename);

// Basically basename() function returns the last path name of the file
const baseName = path.basename(fileName);

// We have a method in path module (i.e. extname() method ) which is used to find out the extension of the file
const extensionName = path.extname(baseName);

console.log("File Name is = ",fileName);

console.log("Base Name is = ",baseName);

console.log("Extension of the file is = ",extensionName);