const fs = require('fs');

// Basically copyFileSync function will copy all the data from the source file and added to the destinaion file.
// If file is not created then it will create a file and add that data
fs.copyFileSync("./file1.txt","file2.txt");
