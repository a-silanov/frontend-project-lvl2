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

const pathJson1 = getFixturePath('file1.json');
const pathJson2 = getFixturePath('file2.json');
const pathYaml1 = getFixturePath('file1.yaml');
const pathYaml2 = getFixturePath('file2.yaml');

test.each([
  [pathJson1, pathJson2, 'stylish', expectedStylish],
  [pathYaml1, pathYaml2, 'stylish', expectedStylish],
  [pathJson1, pathJson2, 'plain', expectedPlain],
  [pathYaml1, pathYaml2, 'plain', expectedPlain],
  [pathJson1, pathJson2, 'json', expectedJson],
  [pathYaml1, pathYaml2, 'json', expectedJson],
])('.add($a, $b)', (path1, path2, format, expected) => {
  expect(genDiff(path1, path2, format)).toBe(expected);
});
