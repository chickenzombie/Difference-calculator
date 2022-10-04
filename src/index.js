import { readFileSync } from 'node:fs';
import path from 'path';
import parseData from './parsers.js';
import buildDiffTree from './treeBuilder.js';
import format from './formatters/index.js';

const getExtractFormat = (filepath) => path.extname(filepath).slice(1);
const getPathToFile = (filepath) => path.resolve(process.cwd(), filepath);
const getData = (filepath) => parseData(readFileSync(filepath, 'utf-8'), getExtractFormat(filepath));

const genDiff = (filepath1, filepath2, typeOfFormat = 'stylish') => {
  const data1 = getData(getPathToFile(filepath1));
  const data2 = getData(getPathToFile(filepath2));

  const diffTree = buildDiffTree(data1, data2);
  return format(diffTree, typeOfFormat);
};

export default genDiff;
