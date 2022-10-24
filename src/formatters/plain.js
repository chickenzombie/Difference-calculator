import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const getPropertyName = (properties, property) => [...properties, property].join('.');

const renderPlain = (node, properties) => {
  switch (node.type) {
    case 'root': {
      const output = node.children.flatMap((child) => renderPlain(child, properties));
      return output.join('\n');
    }
    case 'added':
      return `Property '${getPropertyName(properties, node.key)}' was added with value: ${stringify(node.value)}`;
    case 'removed':
      return `Property '${getPropertyName(properties, node.key)}' was removed`;
    case 'changed':
      return `Property '${getPropertyName(properties, node.key)}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
    case 'unchanged':
      return [];
    case 'nested':
      const output = node.children.flatMap((child) => renderPlain(child, properties));
      return output.join('\n');
    default:
      throw new Error('Tree is not defined');
  }
};

const makePlain = (tree) => renderPlain(tree, []);

export default makePlain;
