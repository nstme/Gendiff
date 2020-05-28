import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const getContent = (filePath) => {
  const fileExtension = filePath.split('.').pop().toLowerCase();
  const fullPath = path.resolve(process.cwd(), filePath);
  switch (fileExtension) {
    case 'json':
      return JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    case 'yaml':
      return yaml.safeLoad(fs.readFileSync(fullPath, 'utf-8'));
    default:
      throw new Error(`Error! File format '${fileExtension}' is not supported`);
  }
};

export default getContent;
