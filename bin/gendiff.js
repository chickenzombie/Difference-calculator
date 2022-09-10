#!/usr/bin/env node
import _ from 'lodash';
import genDiff from '../src/index.js';
import { Command } from 'commander';
const program = new Command();

program
  .version('0.0.1')
  .argument('<filepath1>', 'path to file1')
  .argument('<filepath2>', 'path to file2')
  .option('-f, --format <type>', 'output format')
  .description('Compares two configuration files and shows a difference')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  })
  .parse();
