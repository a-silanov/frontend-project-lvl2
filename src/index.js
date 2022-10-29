import { readFileSync } from 'node:fs';
import _ from 'lodash';
import path from 'path';
import parse from './parsers.js';
import selectFormat from './formaters/index.js';

const getFileData = (filepath) => {
  const readFile = readFileSync(path.resolve(process.cwd(), filepath));
  const ext = path.extname(filepath).slice(1);
  return parse(readFile, ext);
};

const calculateDiff = (data1, data2) => {
  const unionKeys = _.union(Object.keys(data1), Object.keys(data2));
  const diff = _.sortBy(unionKeys).map((node) => {
    if (!_.has(data2, node)) {
      return { key: node, value: data1[node], type: 'deleted' };
    }
    if (!_.has(data1, node)) {
      return { key: node, value: data2[node], type: 'added' };
    }
    if (_.isObject(data1[node]) && _.isObject(data2[node])) {
      return { key: node, children: calculateDiff(data1[node], data2[node]), type: 'nested' };
    }
    if (data1[node] !== data2[node]) {
      return {
        key: node,
        firstValue: data1[node],
        secondValue: data2[node],
        type: 'changed',
      };
    }
    return { key: node, value: data1[node], type: 'unchanged' };
  });
  return diff;
};

const genDiff = (path1, path2, format = 'stylish') => {
  const file1 = getFileData(path1);
  const file2 = getFileData(path2);
  const tree = calculateDiff(file1, file2);
  return selectFormat(tree, format);
};

export default genDiff;
