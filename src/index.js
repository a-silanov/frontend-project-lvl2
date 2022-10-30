import { readFileSync } from 'node:fs';
import path from 'path';
import getParse from './parsers.js';
import calculateDiff from './calculate.js';
import selectFormat from './formaters/index.js';

const getFileData = (filepath) => {
  const readFile = readFileSync(path.resolve(process.cwd(), filepath));
  const ext = path.extname(filepath).slice(1);
  return getParse(readFile, ext);
};

const genDiff = (path1, path2, format = 'stylish') => {
  const file1 = getFileData(path1);
  const file2 = getFileData(path2);
  const tree = calculateDiff(file1, file2);
  return selectFormat(tree, format);
};

export default genDiff;
