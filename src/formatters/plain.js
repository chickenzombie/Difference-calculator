import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const plainFormat = (data) => {
  const iter = (tree, acc) => _.compact(tree.map((node) => {
    const path = `${acc}${node.key}.`;
    const finalPath = path.slice(0, -1);
    switch (node.type) {
      case 'added':
        return `Property '${finalPath}' was added with value: ${stringify(node.value)}`;
      case 'removed':
        return `Property '${finalPath}' was removed`;
      case 'changed':
        return `Property '${finalPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
      case 'unchanged':
        return null;
      case 'nested':
        return iter(node.value, path);
      default:
        throw new Error('Tree is not defined');
    }
  })).join('\n');
  return iter(data, '');
};

export default plainFormat;
