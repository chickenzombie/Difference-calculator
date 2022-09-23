import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from '../parsers/parse.js'

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = keys.sort();

  const result = sortedKeys.flatMap((key) => {
    if (!Object.hasOwn(data1, key)) {
      return ` + ${key} : ${data2[key]}`;
    }
    if (!Object.hasOwn(data2, key)) {
      return ` - ${key} : ${data1[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return [` - ${key} : ${data1[key]}`, ` + ${key} : ${data2[key]}`];
    }
    return `   ${key} : ${data1[key]}`;
  });
  return `{\n${result.join('\n')}\n}`;
};

export default (filepath1, filepath2) => {
  const format1 = path.extname(filepath1);
  const format2 = path.extname(filepath2);

  const data1 = readFileSync(path.resolve(filepath1), 'utf-8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf-8');

  const parsedData1 = parse(format1, data1);
  const parsedData2 = parse(format2, data2);

  return genDiff(parsedData1, parsedData2);
};
