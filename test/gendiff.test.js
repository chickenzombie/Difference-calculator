import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const expectedString = `{
 - follow : false
   host : hexlet.io
 - proxy : 123.234.53.22
 - timeout : 50
 + timeout : 20
 + verbose : true
}`;

test('test gendiff straight usage', () => {
  expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(expectedString);
});
