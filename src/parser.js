import fs from 'fs';
import path from 'path';

const getContent = (filePath) => {
  const fullPath = path.resolve(process.cwd(), filePath);
  return JSON.parse(fs.readFileSync(fullPath, (err) => console.log(`Error: ${err}`)));
};

export default getContent;
