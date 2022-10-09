import { test, expect, describe } from '@jest/globals';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFixtures = (fixtures) => readFileSync(getFixturePath(fixtures), 'utf-8');

const expectedStylish = readFixtures('stylish.txt');
const expectedPlain = readFixtures('plain.txt');
const expectedJSON = readFixtures('json.txt');

describe('default formatter', () => {
  test('json extension', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(expectedStylish);
  });
  test('yaml extension', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toBe(expectedStylish);
  });
});

describe('stylish formatter', () => {
  test('json extension', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toBe(expectedStylish);
  });
  test('yaml extension', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toBe(expectedStylish);
  });
});

describe('plain formatter', () => {
  test('json extension', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(expectedPlain);
  });
  test('yaml extension', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toBe(expectedPlain);
  });
});

describe('json formatter', () => {
  test('json extension', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(expectedJSON);
  });
  test('yaml extension', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toBe(expectedJSON);
  });
});
