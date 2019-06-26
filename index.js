const fs = require('fs');
const { join } = require('path');
fs.readFile(join(__dirname, './files/2.txt'), {encoding: 'utf8' }, (err, data) => {
  if(err) throw err;
  console.log(data);
});

fs.rename('./files/2.txt')
// module.exports = {
//   fs
// }