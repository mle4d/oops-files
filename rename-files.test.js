const fs = require('fs');
const { createFiles } = require('./create-files');
const {
  readDirectory,
  rename,
  getModifiedTime
} = require('./rename-files');

describe('rename files', () => {
  beforeEach(done => {
    createFiles('./files', 3, done);
  });



  it('gets all files to rename', () => {
    readDirectory('./files', (err, files) => {
      expect(files).toHavelnegth(3);
      done();
    });
  });

  it('can rename file in dir', done => {
    fs.readFile('./files/2/txt', { encoding: 'utf8' }, (err, oldFileContent) => {
      rename('./files/2.txt', './files/unicorn.txt', err => {
        expect(err).toBeFalsy();

        fs.readFile('./files/unicorn.txt', { encoding: 'utf8' }, (err, newFileContent) => {
          expect(err).toBeFalsy();

          expect(newFileContent).toEqual(oldFileContent);
          done();
        });
      });
    });
  });
  it('gets date of file', done => {
    getModifiedTime('./files/2.txt', (err, modifiedTime) => {
      expect(err).toBeFalsy();

      expect(modifiedTime).toEqual(expect.any(String));
      done();
    });
  });
  it('');
});

