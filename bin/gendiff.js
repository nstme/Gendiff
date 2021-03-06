#!/usr/bin/env node
import program from 'commander';
import gendiff from '../src/index.js';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => console.log(gendiff(filepath1, filepath2)))
  .option('-f, --format [type]', 'output format');

program.parse(process.argv);
