#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();

program.command('gendiff')
  .version('0.0.1')
  .argument('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference')
  .parse(process.argv);