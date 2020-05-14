import program from 'commander';

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

export default () => program.parse(process.argv);
