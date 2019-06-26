const fs = require('fs');

const months = [
  'may',
  'february',
  'october'
];
const getMonths = () => {
  const index = Math.floor(Math.random() * months.length);
  return months[index];
};
const createFiles = (directory, count, callback) => {
  let writtenSoFar = 0;
  for(let i = 0; i < count; i++) {
    fs.WriteFile('${directory}/${i}.txt', getMonths(), err => {
      if(err) return callback(err);
      writtenSoFar += 1;
      if(writtenSoFar === count) callback();
    });
  }
};

module.export = {
  getMonths,
  createFiles
};
