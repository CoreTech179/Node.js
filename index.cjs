// This is our entry point file (i.e. Our main file ) which is defined in package.json

// console.log("Hello World");

// Importing our function by using require function
// Syntax --> keyword variableName = require('./fileName.js');

var area = require('./Area.cjs');

// Now this name "area" will work as a reference for Area.cjs file

const findArea = (a)=>{
    console.log(`Number is ${a} and Area is ${area.Area(a)}`);
    console.log(`Perimeter is ${area.perimeter(a)}`);
}

findArea(5);

console.log(__filename); // This gives the file name with its exact path where this file is present
console.log(__dirname); // This gives only the entire path for the directory and not gives the file name