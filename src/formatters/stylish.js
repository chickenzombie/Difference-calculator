import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth, renderStylish) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const output = Object.entries(data).map(([key, value]) => renderStylish({ type: 'unchanged', key, value }, depth + 1));
  return `{\n${output.join('\n')}\n${indent(depth)}  }`;
};

const renderStylish = (node, depth) => {
  switch (node.type) {
    case 'root': {
      const output = node.children.map((children) => renderStylish(children, depth + 1));
      return `{\n${output.join('\n')}\n}`;
    }
    case 'added': {
      return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth, renderStylish)}`;
    }
    case 'removed': {
      return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth, renderStylish)}`;
    }
    case 'unchanged':
      return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth, renderStylish)}`;
    case 'changed': {
      const output1 = `${indent(depth)}- ${node.key}: ${stringify(node.value1, depth, renderStylish)}`;
      const output2 = `${indent(depth)}+ ${node.key}: ${stringify(node.value2, depth, renderStylish)}`;
      return `${output1}\n${output2}`;
    }
    case 'nested': {
      const output = node.children.map((children) => renderStylish(children, depth + 1));
      return `${indent(depth)}  ${node.key}: {\n${output.join('\n')}\n${indent(depth)}  }`;
    }
    default:
      return new Error(`${node.type} is not defined`);
  }
};

const makeStylish = (tree) => renderStylish(tree, 0);

export default makeStylish;
