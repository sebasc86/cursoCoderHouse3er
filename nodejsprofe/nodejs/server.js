const http = require("http");
const path = require('path');

const utils = require('./utils');

const pathToFile = path.resolve(__dirname, 'archivos.txt');

const server = http.createServer((request, response) => {
  utils.fileToString(pathToFile, (err, data) => {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.write('Error reading file...');
      response.end();
    } else {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(data);
      response.end();
    }
  });
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});