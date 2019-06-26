const fs = require('fs');
const { join } = require('path');
fs.readFile(join(__dirname, './files/2.txt'), { encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
});

fs.rename('./files/2.txt', './files/unicorns.txt', err => {
  if(err) throw (err);

});

// module.exports = {
//   fs
