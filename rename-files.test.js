const fs = require('fs');
const { createFiles } = require('./create-files');
const {
  readDirectory,
  rename,
  getModifiedTime,
  readFile,
  renameEverything
} = require('./rename-files');

describe('rename files', () => {
  beforeEach(done => {
    createFiles('./files', 3, done);
  });

  it('gets all files to rename', done => {
    readDirectory('./files', (err, files) => {
      expect(files).toHavelength(3);
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
  it('gets file content', done => {
    fs.readFile('./files/2.txt', { encoding: 'utf8' }, (err, expectedContent) => {
      readFile('./files/2.txt', (err, resultContent) => {
        expect(err).toBeFalsy();
        expect(resultContent).toEqual(expectedContent);
        done();
      });
    });
    it('renames all', done => {
      renameEverything('./files', err => {
        expect(err).toBeFalsy();

        fs.readdir('./files', (err, files) => {
          expect(files).toHaveLength(3);
          files.forEach(file => {
            expect(file).toMatch(/\w+-\d+-\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d+Z/);
          });
          done();
        });
      });
    });
  });
});
