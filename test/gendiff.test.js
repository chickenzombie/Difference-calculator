import { test, expect } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const stylishFormat = readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const plainFormat = readFileSync(getFixturePath('plain.txt'), 'utf-8');

test('test stylish formatter', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(stylishFormat);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(stylishFormat);
});

test('test plain formatter', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(plainFormat);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toBe(plainFormat);
});
