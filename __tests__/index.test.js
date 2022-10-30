import { fileURLToPath } from 'node:url';
import path from 'path';
import { readFileSync } from 'node:fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');
const expectedStylish = readFile('test.txt').trim();
const expectedPlain = readFile('plain.txt').trim();
const expectedJson = readFile('json.txt').trim();

test('check stylish json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(genDiff(path1, path2, 'stylish')).toEqual(expectedStylish);
});

test('check stylish yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiff(path1, path2, 'stylish')).toEqual(expectedStylish);
});

test('check plain json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(genDiff(path1, path2, 'plain')).toEqual(expectedPlain);
});

test('check plain yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiff(path1, path2, 'plain')).toEqual(expectedPlain);
});

test('check json json', () => {
  const path1 = getFixturePath('file1.json');
  const path2 = getFixturePath('file2.json');
  expect(genDiff(path1, path2, 'json')).toEqual(expectedJson);
});

test('check json yaml', () => {
  const path1 = getFixturePath('file1.yaml');
  const path2 = getFixturePath('file2.yaml');
  expect(genDiff(path1, path2, 'json')).toEqual(expectedJson);
});
