import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fullPath, (err) => console.log(`Error: ${err}`)));
};

const getDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  return `{\n${keys.reduce((acc, key) => {
    let acumulator = acc;
    if (keys1.includes(key) && keys2.includes(key)) {
      if (obj1[key] === obj2[key]) {
        acumulator += `    ${key}: ${obj1[key]}\n`;
        return acumulator;
      }
      acumulator += `  - ${key}: ${obj1[key]}\n`;
      acumulator += `  + ${key}: ${obj2[key]}\n`;
      return acumulator;
    }
    if (keys1.includes(key) && !keys2.includes(key)) {
      acumulator += `  - ${key}: ${obj1[key]}\n`;
      return acumulator;
    }
    if (!keys1.includes(key) && keys2.includes(key)) {
      acumulator += `  + ${key}: ${obj2[key]}\n`;
      return acumulator;
    }
    throw new Error('Key must be found at least in one object');
  }, '')}}`;
};

const gendiff = (filepath1, filepath2) => {
  const fileData1 = getContent(filepath1);
  const fileData2 = getContent(filepath2);
  return getDiff(fileData1, fileData2);
};

export default gendiff;
