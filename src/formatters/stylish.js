import _ from 'lodash';

const indent = (depth, spacesCounts = 4) => ' '.repeat(depth * spacesCounts - 2);

const formatValue = (value, depth) => {
  if (!_.isObject(value)) {
    return String(value);
  }

  const formatString = Object.entries(value).map(([key, innerValue]) => {
    const object = { key, value: innerValue };
    return `${indent(depth)}  ${object.key}: ${formatValue(object.value, depth + 1)}`;
  });
  return `{\n${formatString.join('\n')}\n${indent(depth - 1)}  }`;
};

const stylish = (data) => {
  const iter = (tree, depth) => tree.flatMap((node) => {
    switch (node.type) {
      case 'added':
        return `${indent(depth)}+ ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'removed':
        return `${indent(depth)}- ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'changed':
        return `${indent(depth)}-  ${node.key}: ${formatValue(node.value1, depth + 1)}\n${indent(depth)}+  ${node.key}: ${formatValue(node.value2, depth + 1)}`;
      case 'unchanged':
        return `${indent(depth)}  ${node.key}: ${formatValue(node.value, depth + 1)}`;
      case 'nested':
        return `${indent(depth)}  ${node.key}: {\n${iter(node.value, depth + 1).join('\n')}\n${indent(depth)}  }`;
      default:
        throw new Error('Tree is not defined');
    }
  });
  return `{\n${iter(data, 1).join('\n')}\n}`;
};

export default stylish;
