import _ from 'lodash';
import getContent from './parser.js';

const getDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2);
  const temp = keys.reduce((acc, key) => {
    if (keys1.includes(key) && keys2.includes(key)) {
      if (obj1[key] === obj2[key]) {
        acc.push(`    ${key}: ${obj1[key]}`);
        return acc;
      }
      acc.push(`  - ${key}: ${obj1[key]}`);
      acc.push(`  + ${key}: ${obj2[key]}`);
      return acc;
    }
    if (keys1.includes(key) && !keys2.includes(key)) {
      acc.push(`  - ${key}: ${obj1[key]}`);
      return acc;
    }
    if (!keys1.includes(key) && keys2.includes(key)) {
      acc.push(`  + ${key}: ${obj2[key]}`);
      return acc;
    }
    throw new Error('Key must be found at least in one object');
  }, []);
  return `{\n${temp.join('\n')}\n}`;
};

const gendiff = (filepath1, filepath2) => {
  const fileData1 = getContent(filepath1);
  const fileData2 = getContent(filepath2);
  return getDiff(fileData1, fileData2);
};

export default gendiff;
