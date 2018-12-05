const fs = require('fs');

module.exports.fileToString = (pathToFile, cb) => {
  fs.readFile(pathToFile, (err, data) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data.toString());
    }
  });
};