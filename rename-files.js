const fs = require('fs');

const readDirectory = (directory, callback) => {
  fs.readdir(directory, callback);
};

const rename = (path, newPath, callback) => {
  fs.rename(path, newPath, callback);
};
const getModifiedTime = (path, callback) => {
  fs.stat(path, (err, stats) => {
    if(!stats) return callback(err);
    callback(err, stats && stats.mtime.toISOString());
  });
};

const readFile = (path, callback) => {
  fs.readFile(path, { encoding: 'utf8' }, callback);
};

const readEverything = (directory, callback) => {
  readDirectory(directory, (err, files) => {
    files.forEach(files => {
      readFile('${directory}/${file}', (err, fileContent) => {
        let renamedSoFar = 0;
        if(err) return callback(err);
        getModifiedTime('${directory}/${file}', (err, modifiedTime) => {
          if(err) return callback(err);
        });
      });
    });
  });
};
module.exports = {
  readDirectory,
  rename,
  getModifiedTime,
  readFile,
  readEverything
};
