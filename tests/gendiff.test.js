import { test, expect } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const expectedStylishFormat = readFileSync(getFixturePath('stylish.txt'), 'utf-8');
const expectedPlainFormat = readFileSync(getFixturePath('plain.txt'), 'utf-8');
const expectedJSONFormat = readFileSync(getFixturePath('json.txt'), 'utf-8');

test('test stylish formatter', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toBe(expectedStylishFormat);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toBe(expectedStylishFormat);
});

test('test plain formatter', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(expectedPlainFormat);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toBe(expectedPlainFormat);
});

test('test json formatter', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(expectedJSONFormat);
  expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toBe(expectedJSONFormat);
});
