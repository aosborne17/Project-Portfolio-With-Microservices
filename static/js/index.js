// //Load HTTP module
// const http = require("http");
// const hostname = '127.0.0.1';
// const port = 3000;

// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {

//   //Set the response HTTP header with HTTP status and Content type
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// //listen for request on port 3000, and as a callback function have the port listened on logged
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// // importing the express module using require
// const express = require('express')
// // creating a server named app
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// // the app server listens for HTTP requests on port 8000 
// app.listen(8000, () => {
//     console.log('Example app listening on port 8000!')
// })


// This function once run redirects the user to the games menu page
function loadGames() {
    location.href = 'games.html';
}