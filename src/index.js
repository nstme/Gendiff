import fs from 'fs';
import _ from 'lodash';

const getContent = (filename) => {
  const cwd = process.cwd();
  console.log(cwd);
  return JSON.parse(fs.readFileSync(`${cwd}/src/${filename}`, (err) => {
    return console.log(`Error: ${err}`);
  }));
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = getContent(filepath1);
  const obj2 = getContent(filepath2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  console.log(keys);
  const result = {};
  
  return console.log(obj1, obj2);
}

export default gendiff;
