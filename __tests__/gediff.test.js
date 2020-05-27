import gendiff from '../src/index.js';
import { test, expect } from '@jest/globals';
import fs from 'fs';

test('flat json', () => {
  const before = './__fixtures__/before.json';
  const after = './__fixtures__/after.json';
  const expected = JSON.parse(fs.readFileSync('./__fixtures__/after.json'));
  expect(gendiff(before, after)).toEqual(expected);
});
