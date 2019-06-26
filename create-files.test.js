const { createFiles, getMonths } = require('./create-files');
const fs = require('./index');

describe('create files', () => {
  afterEach(done => {
    fs.readdir('./files', { encoding: 'utf8' }, (err, files) => {
      if(files.length === 0) done();
      let deletedSoFar = 0;
      files.forEach(files => {
        fs.unlink('./files/${file}', err => {
          if(err) return done(err);
          deletedSoFar += 1;
          if(deletedSoFar === files.length) done();
        });
      });
    });
  });

  it('can get random month', () => {
    const month = getMonths();
    expect(month).toEqual(expect.any(String));
  });

  it('can make files with months in them', done => {
    createFiles('./files', 3, err => {
      expect(err).toBeFalsy();

      fs.readdir('./files', { encoding: 'utf8' }, (err, files) => {
        expect(files).toHaveLength(3);
        done();
      });
    });
  });
});
