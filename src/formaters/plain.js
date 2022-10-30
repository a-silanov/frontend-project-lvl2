import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const getPath = (path, key) => [...path, key].join('.');

const plain = (tree) => {
  const iter = (node, depth) => {
    const plainFormat = node.flatMap((item) => {
      switch (item.type) {
        case 'deleted':
          return `Property '${getPath(depth, item.key)}' was removed`;
        case 'added':
          return `Property '${getPath(depth, item.key)}' was added with value: ${stringify(item.value)}`;
        case 'nested':
          return iter(item.children, [...depth, item.key]);
        case 'changed':
          return `Property '${getPath(depth, item.key)}' was updated. From ${stringify(item.firstValue)} to ${stringify(item.secondValue)}`;
        case 'unchanged':
          return [];
        default:
          throw new Error(`Type ${item.type} is undefined!`);
      }
    });
    return plainFormat.join('\n');
  };
  return iter(tree, []);
};

export default plain;
