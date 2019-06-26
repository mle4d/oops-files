const createFile = require('./create-files');

describe('create files', () => {
  it('can get random month', () => {
  const month = getMonth();
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