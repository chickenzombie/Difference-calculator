import _ from 'lodash';

const treeBuilder = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = keys.sort();

  const tree = sortedKeys.flatMap((key) => {
    if (!Object.hasOwn(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!Object.hasOwn(data2, key)) {
      return { type: 'removed', key, value: data1[key] };
    }
    if (data1[key] !== data2[key]) {
      return {
        type: 'changed', key, value1: data1[key], value2: data2[key],
      };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', key, value: treeBuilder(data1[key], data2[key]) };
    }
    return { type: 'unchanged', key, value: data1[key] };
  });
  return `{\n${tree.join('\n')}\n}`;
};

export default treeBuilder;
