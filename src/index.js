import { readFileSync } from 'fs';
import path from 'path';
import _ from 'lodash';

  const genDiff = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.union(keys1, keys2); 
    const sortedKeys = keys.sort();
    // CTRL + K + C && CTRL + K + U
    // Знак - означает, что ключ отсутствовал в первом объекте, но был добавлен во второй
    // Знак + означает, что ключ был в первом объекте, но отсутствует во втором
    // Отсутствие знака означает, что ключ есть в обоих файлах, и его значения совпадают

    const result = sortedKeys.flatMap((key => { // 
     {
        if (!Object.hasOwn(data1, key)) {
          return ` + ${key} : ${data2[key]}`;
        }
        if (!Object.hasOwn(data2, key)) {
          return ` - ${key} : ${data1[key]}`;
        }
        if (data1[key] === data2[key]) {
          return `   ${key} : ${data1[key]}`;
        } 
        if (data1[key] !== data2[key]) {
          return [` - ${key} : ${data1[key]}`, ` + ${key} : ${data2[key]}`];
         }
        }
    }))
    return `{\n${result.join('\n')}\n}`;
};
  
export default (filepath1, filepath2) => {
  const data1 = readFileSync(path.resolve(filepath1), 'utf-8');
  const data2 = readFileSync(path.resolve(filepath2), 'utf-8');
  
  const parsedData1 = JSON.parse(data1);
  const parsedData2 = JSON.parse(data2);

  return genDiff(parsedData1, parsedData2);
};


 