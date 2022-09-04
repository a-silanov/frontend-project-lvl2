import { readFileSync } from 'node:fs';
import _ from 'lodash';
import path from 'path';

const getFileData = (filepath1, filepath2) => {
  const file1 = JSON.parse(readFileSync(path.resolve(process.cwd(), filepath1)));
  const file2 = JSON.parse(readFileSync(path.resolve(process.cwd(), filepath2)));
  return [file1, file2];
};

const genDiff = (path1, path2) => {
  const [data1, data2] = getFileData(path1, path2);
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
