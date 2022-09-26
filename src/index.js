import { readFileSync } from 'fs';
import path from 'path';
import parse from '../parsers/parse.js';
import treeBuilder from './treeBuilder.js';
import stylish from './formatters/stylish.js';

export default (filepath1, filepath2) => {
  const format1 = path.extname(filepath1);
  const format2 = path.extname(filepath2);

  const data1 = readFileSync(path.resolve(filepath1), 'utf-8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf-8');

  const parsedData1 = parse(data1, format1);
  const parsedData2 = parse(data2, format2);
  const diffTree = treeBuilder(parsedData1, parsedData2);
  console.log(diffTree);
  return stylish(diffTree);
};
