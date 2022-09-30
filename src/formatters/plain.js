import _ from 'lodash';

const stringify = (value) => {
    if (_.isPlainObject(value)) {
      return '[complex value]';
    }
    if (_.isString(value)) {
      return String(value);
    }
    return value;
  };

const plainFormat = (data) => {
  const iter = (tree, acc) => _.compact(tree.map((node) => { // compact выкидывает фолси значения, что нужно в случае кейса unchanged
    const path = `${acc}${node.key}.`;
    switch (node.type) {
        case 'added': // Property 'common.follow' was added with value: false
          return `Property ${path} was added with ${stringify(node.value)}`;
        case 'removed': // Property 'common.setting2' was removed
          return `Property ${path} was removed`;
        case 'changed': // Property 'common.setting3' was updated. From true to null
          return `Property ${path} was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
        case 'unchanged':
          return null;
        case 'nested':
          return iter(node.value, path);
        default:
          throw new Error('Tree is not defined');
      }
    }));
    return iter(data, '');
  };
  
  export default plainFormat;