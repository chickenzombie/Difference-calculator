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

describe('genDiff module', () => {
  test('json extension', () => {
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(expectedStylish);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toBe(expectedStylish);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(expectedPlain);
    expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(expectedJSON);
  });
  test('yaml extension', () => {
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(expectedStylish);
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toBe(expectedStylish);
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toBe(expectedPlain);
    expect(genDiff(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toBe(expectedJSON);
  });
});
