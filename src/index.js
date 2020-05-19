import program from 'commander';
import fs from 'fs';
import _ from 'lodash';

const getContent = (filename) => {
  const cwd = process.cwd();
  return JSON.parse(fs.readFileSync(`${cwd}/src/${filename}`, (err) => {
    return console.log(`Error: ${err}`);
  }));
};

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action(function (fpath1, fpath2) {
    const filepath1 = getContent(fpath1);
    console.log(filepath1);
    const filepath2 = getContent(fpath2);
    console.log(filepath2);
  })
  .option('-f, --format [type]', 'output format');

export default () => program.parse(process.argv);
