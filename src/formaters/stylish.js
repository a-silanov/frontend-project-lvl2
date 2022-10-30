import _ from 'lodash';

const getIndent = (spasesCount, replacer = ' ') => replacer.repeat((spasesCount * 4) - 2);
const getBracketIndent = (spasesCount, replacer = ' ') => replacer.repeat((spasesCount * 4) - 4);

const getValue = (currentValue, level) => {
  if (!_.isObject(currentValue)) {
    return `${currentValue}`;
  }
  const lines = Object
    .entries(currentValue)
    .map(([key, value]) => `${getIndent(level)}  ${key}: ${getValue(value, level + 1)}`);
  return ['{', ...lines, `${getBracketIndent(level)}}`].join('\n');
};

const stylish = (tree) => {
  const iter = (node, depth) => {
    const newIndent = getIndent(depth);
    const bracketIndent = getBracketIndent(depth);

    const stringRepresentation = node.map((item) => {
      switch (item.type) {
        case 'added':
          return `${newIndent}+ ${item.key}: ${getValue(item.value, depth + 1)}`;
        case 'deleted':
          return `${newIndent}- ${item.key}: ${getValue(item.value, depth + 1)}`;
        case 'nested':
          return `${newIndent}  ${item.key}: ${iter(item.children, depth + 1)}`;
        case 'unchanged':
          return `${newIndent}  ${item.key}: ${getValue(item.value, depth + 1)}`;
        case 'changed':
          return `${newIndent}- ${item.key}: ${getValue(item.firstValue, depth + 1)}\n${newIndent}+ ${item.key}: ${getValue(item.secondValue, depth + 1)}`;
        default:
          throw new Error(`Type ${item.type} is undefined!`);
      }
    });
    return ['{', ...stringRepresentation, `${bracketIndent}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
