const { Command } = require('commander');
const program = new Command();

program
  .version('0.1')
  .description('Compares two configuration files and shows a difference')
  .parse();