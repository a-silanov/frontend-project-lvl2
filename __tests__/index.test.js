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

const extensions = ['yml', 'json'];

test.each([extensions])('.add($a, $b)', ('genDiff', (extension) => {
  const fileBefore = getFixturePath(`file1.${extension}`);
  const fileAfter = getFixturePath(`file2.${extension}`);

  expect(genDiff(fileBefore, fileAfter, 'plain')).toBe(expectedPlain);
  expect(genDiff(fileBefore, fileAfter, 'stylish')).toBe(expectedStylish);
  expect(genDiff(fileBefore, fileAfter, 'json')).toBe(expectedJson);
  expect(genDiff(fileBefore, fileAfter)).toBe(expectedStylish);
}));
