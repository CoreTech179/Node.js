// What is Node.js --> Basically it is a javaScript runtime for executing javaScript codes.
// It is not a language or a Framework

// Basically with the help of node js we can create our own server and run our html,css and js files without using a third party server to host our webpage.

// What is REPL --> Basically it is nothing but just like a console where we can write our js code and execute it. For that we need to write a command on our terminal "node". Now we can execute our js codes. 

// Our main topic is to run our Node.js therefore for that our 1st step is to initialize our node package manager(i.e."npm")
// Command: "npm init"

// Why Node.js --> Suppose we have to write a huge amount of javascript in a one file then the code looks messy and there is no other way to remove this mess because all the functionalities are written inside a same file, such that to overcome this problem Node js introduces modules where we can write our required functionalities on a diffrent different files and we just import those files and use it on our single file suh that it makes the code look more cleaner.

// Notes: Since we have an es6 modern way but for now we are avoiding modern way and using the traditional way of node.js method therefore we have to define our file extension as .cjs (i.e. CommonJS) which allows us to use file based module properties easily


// Node Modules and its types

// 1. File based Modules --> The "module.exports" variable determines the export from the current module.
// The "require function" is used to import a module on the main file

// 2. Core Modules --> These are built-in modules
// Part of the core Node (example: path, fs, os, utils, http.....etc)

// 3. External Node modules
// Third party modules
// Installed using "npm"
// node_modules folder in your node application