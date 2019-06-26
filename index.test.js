const fs = require('fs');
const { join } = require('path');

describe('readz a file', () => {
  it('reads a file', done => {
    fs.readFile(join(__dirname, './files/15.txt'), { encoding: 'utf8' }, (err, data) => {
     done();
    });
  })
});