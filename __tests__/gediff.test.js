import { test, expect } from '@jest/globals';
import fs from 'fs';
import gendiff from '../src/index.js';

const expected = fs.readFileSync('./__fixtures__/expected.txt', 'utf-8');
const expectedDeep = fs.readFileSync('./__fixtures__/expectedDeep.txt', 'utf-8');
const beforeJson = './__fixtures__/before.json';
const afterJson = './__fixtures__/after.json';
const beforeYml = './__fixtures__/before.yml';
const afterYml = './__fixtures__/after.yml';
const beforeIni = './__fixtures__/before.ini';
const afterIni = './__fixtures__/after.ini';
const beforeDeepJson = './__fixtures__/beforeDeep.json';
const afterDeepJson = './__fixtures__/afterDeep.json';

test.each([
  [beforeJson, afterJson],
  [beforeYml, afterYml],
  [beforeIni, afterIni],
])('gendiff plain', (before, after) => {
  expect(gendiff(before, after)).toEqual(expected);
});

test('gendiff deep Json', () => {
  expect(gendiff(beforeDeepJson, afterDeepJson)).toEqual(expectedDeep);
});
