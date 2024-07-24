// Creating our own Server with the help of "http" module in node.js


// Here we get all our http modules needed for our server creation
const http = require('http');

const fs = require('fs');
const path = require('path');

const hostname = "localhost";

const port = 3000;

// Here to create a server we use the method name "createServer()" from the http module
const server = http.createServer((request,response)=>{
    //console.log(request.headers); // Here we need to know the details whoever is requesting at this server for that we use "request.headers"

    console.log(`request from url is ${request.url} and the method is ${request.method}`);

    // If the request is made from "GET" method then run the if block 
    if(request.method == GET){

        var fileURL;

        // If my request is '/' that means root then it must load our main page 'index.html' file
        if(request.url == '/'){

            fileURL = '/index.html';

        }else{
            // If someone is requesting wrong url then we just assign the "url" to the variable fileURL such that the page will not load
            fileURL = request.url;

        }

        // We know that our file is inside the public folder therefore we need to define a complete path to that exact file location from starting to end therefore we use path.resolve() method from the path module.
        var filePath = path.resolve('./public'+fileURL);

        // Now we need to check wheather the extension of that file is ".html" or something for that we need to use the method of path module

        const fileExtension = path.extname(filePath);

        if(fileExtension == '.html'){
            // Now we need to check wheather that particular file exist in you public folder or not. Now for the time being we have only "index.html" but if someone is requesting for "contact.html" then what will be the result. For that we need to check that condition also by using "exist method " from fs module

            fs.existsSync(filePath,(exist)=>{
                // if that file not exist in our public folder then
                if(!exist){

                    request.statusCode = 404;
                    response.setHeader('Content-Type','text/html');
                    response.end('<html><body><h1>Page Not Found!</h1></body></html>');

                }else{

                    request.statusCode = 200;
                    response.setHeader('Content-Type','text/html');
                    fs.createReadStream(filePath).pipe(response);
                    // Basically this createReadStream will read the file and convert into steams of bytes and with the help of pipe one by one it will send me the response

                }

            });

        }else{
            // If there is no file in our public folder
            request.statusCode = 404;
            response.setHeader('Content-Type','text/html');
            response.end('<html><body><h1>Page Not Found!</h1></body></html>');
        }


    }else{

        request.statusCode = 404;
        response.setHeader('Content-Type','text/html');
        response.end('<html><body><h1>Method is not from GET method & not supported!</h1></body></html>');

    }
    
    
    
    // request.statusCode = 200; // When the request to our server is made by the client then I want to send some message that the request is successfully received for that we use "statusCode" and statusCode = 200 means request successful & 400 or 404 is unsuccessful request

    // response.setHeader('Content-Type','text/html'); // Here setHeader means whatever the response we are sending to the client its "Content-Type" is in the text format but it is an html document 

    // response.end('<html><body><h1>Server creation Successfully Done </h1></body></html>');

    // Here we are sending a response to the client by using the end() method. 
    // Note here we need to use single quotes such that node will understand the response is in the html format


});


// We have successfully created our server but how we need to run? for that we use .listen(portNumber,hostname, callback function ) method

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});