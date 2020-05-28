import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getContent = (filePath) => {
  const format = path.extname(filePath);
  const fullPath = path.resolve(process.cwd(), filePath);
  const data = fs.readFileSync(fullPath, 'utf-8');

  let parse;

  switch (format) {
    case '.json':
      parse = JSON.parse;
      break;
    case '.yml':
      parse = yaml.safeLoad;
      break;
    default:
      throw new Error(`Error! File format '${format}' is not supported`);
  }

  return parse(data);
};

export default getContent;
