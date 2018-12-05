const fs = require('fs')
const http = require('http');

const utils = require('./utils');

var server = http.createServer(function (request, response) {
        
        utils.fileToString(__dirname + '/index.html', (err, data) => {
            if(err){
                response.writeHead(404, {"Content-Type": "text/plain"});
                response.write('Erro Data')
                response.end()
            }
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data)
            response.end()
        })
        
    
});


// process.env.PORT variable de entorno
server.listen(process.env.PORT || 4000, () => {
    console.log("Server is listening");
});
