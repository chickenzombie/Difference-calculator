import { readFileSync } from 'node:fs';
import path from 'path';
import parseData from './parsers.js';
import buildDiffTree from './treeBuilder.js';
import format from './formatters/index.js';

const extractFormat = (filepath) => path.extname(filepath).slice(1);
const makeFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => parseData(readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const genDiff = (filepath1, filepath2, outputFormat = 'stylish') => {
  const data1 = getData(makeFullPath(filepath1));
  const data2 = getData(makeFullPath(filepath2));

  const diffTree = buildDiffTree(data1, data2);
  return format(diffTree, outputFormat);
};

export default genDiff;
