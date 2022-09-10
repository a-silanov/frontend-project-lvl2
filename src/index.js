import { readFileSync } from 'node:fs';
import _ from 'lodash';
import path from 'path';
import parse from './parsers.js';

const getFileData = (filepath) => {
  const readFile = readFileSync(path.resolve(process.cwd(), filepath));
  const ext = path.extname(filepath).slice(1);
  return parse(readFile, ext);
};

const genDiff = (path1, path2) => {
  const data1 = getFileData(path1);
  const data2 = getFileData(path2);
  const unionKeys = _.union(Object.keys(data1), Object.keys(data2));
  const diff = _.sortBy(unionKeys).map((key) => {
    if (_.has(data1, key) && _.has(data2, key) && data1[key] === data2[key]) {
      return `\n    ${key}: ${data1[key]}`;
    }
    if (!_.has(data2, key)) {
      return `\n  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `\n  + ${key}: ${data2[key]}`;
    }
    return `\n  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
  });
  return `{${diff.join('')}\n}`;
};

export default genDiff;
