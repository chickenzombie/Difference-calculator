const program = require('commander');

program
  .version('0.1')
  .description('Compares two configuration files and shows a difference')
  .parse(process.argv);