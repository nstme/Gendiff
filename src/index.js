import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fullPath, (err) => {
    return console.log(`Error: ${err}`);
  }));
};

const gendiff = (filepath1, filepath2) => {
  const obj1 = getContent(filepath1);
  const obj2 = getContent(filepath2);
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  let result = '';
  for (let key of keys) {
    if (keys1.includes(key) && keys2.includes(key)) {
      if (obj1[key] === obj2[key]) {
        result += `  ${key}: ${obj1[key]}\n`;
      } else {
        result += `- ${key}: ${obj1[key]}\n`;
        result += `+ ${key}: ${obj2[key]}\n`;
      }
    } else if (keys1.includes(key) && !keys2.includes(key)) {
      result += `- ${key}: ${obj1[key]}\n`;
    } else if (!keys1.includes(key) && keys2.includes(key)) {
      result += `+ ${key}: ${obj2[key]}\n`;
    } else {
      throw new Error('Key must be found in at least one object');
    }
  }
  result = `{\n${result}}`;
  return result;
}

export default gendiff;
