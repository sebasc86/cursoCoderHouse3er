const fs = require('fs');
const path = require('path');

const pathToFile = path.resolve(__dirname, 'index.html');

const file = fs.readFileSync(pathToFile);

fs.readFile(pathToFile, (err, data) => {
  if (err) {
    throw err;
  } 

  console.log(data.toString());
});

console.log(file.toString());