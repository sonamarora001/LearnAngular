//npm install connect@2.X.X

var connect = require('connect'); // module name: connect (to connect to server)
connect.createServer(
    connect.static("../hello-world-master")  // use static if all files in your project are static
).listen(5000);


//Step 1:

// install node_modules using following command
// npm install connect@2.X.X (on terminal)
// check connection status using 
// node server.js  (on terminal)

// Step 2: download angular JS file
// user directive ng-app
// give module name


