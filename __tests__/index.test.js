import { fileURLToPath } from 'node:url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const expectedText = readFile('test.txt').trim();

test('check genDiff json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(genDiff(path1, path2)).toEqual(expectedText);
  expect(genDiff(path1, path2)).toEqual(expectedText);
});

test('check genDiff yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file1.yaml');
  expect(genDiff(path1, path2)).toEqual(expectedText);
  expect(genDiff(path1, path2)).toEqual(expectedText);
});

test('check genDiff yml', () => {
  const path1 = getFixturePath('file1.yml');
  const path2 = getFixturePath('file1.yml');
  expect(genDiff(path1, path2)).toEqual(expectedText);
  expect(genDiff(path1, path2)).toEqual(expectedText);
});
