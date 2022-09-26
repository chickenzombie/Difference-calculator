import { test, expect } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__/', filename);
const treeStylish = readFileSync(getFixturePath('stylish.txt'), 'utf-8');

test('test stylish', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(treeStylish);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(treeStylish);
});
