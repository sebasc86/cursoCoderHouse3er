const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, 'archivo.txt');

fs.watch(pathToFile, (event, filename) => {
  console.log('Event: ', event);

  fs.readFile(pathToFile, (err, data) => {
    if (err) {
      throw err;
    }

    console.log('File: ', filename);
    console.log('Content: ', data.toString());
  });
});
