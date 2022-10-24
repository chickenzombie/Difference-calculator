import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth, renderStylish) => {
  if (!_.isObject(data)) {
    return String(data);
  }
  const output = Object.entries(data).map(([key, value]) => renderStylish({ type: 'unchanged', key, value }, depth + 1));
  return `{\n${output.join('\n')}\n${indent(depth)}  }`;
};

const render = (node, depth) => {
  switch (node.type) {
    case 'root': {
      const output = node.children.map((children) => render(children, depth + 1));
      return `{\n${output.join('\n')}\n}`;
    }
    case 'added': {
      return `${indent(depth)}+ ${node.key}: ${stringify(node.value, depth, render)}`;
    }
    case 'removed': {
      return `${indent(depth)}- ${node.key}: ${stringify(node.value, depth, render)}`;
    }
    case 'unchanged':
      return `${indent(depth)}  ${node.key}: ${stringify(node.value, depth, render)}`;
    case 'changed': {
      const output1 = `${indent(depth)}- ${node.key}: ${stringify(node.value1, depth, render)}`;
      const output2 = `${indent(depth)}+ ${node.key}: ${stringify(node.value2, depth, render)}`;
      return `${output1}\n${output2}`;
    }
    case 'nested': {
      const output = node.children.map((children) => render(children, depth + 1));
      return `${indent(depth)}  ${node.key}: {\n${output.join('\n')}\n${indent(depth)}  }`;
    }
    default:
      throw new Error(`${node.type} is not defined`);
  }
};

const renderStylish = (tree) => render(tree, 0);

export default renderStylish;
