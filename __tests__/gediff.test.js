import { test, expect } from '@jest/globals';
import fs from 'fs';
import gendiff from '../src/index.js';

test('flat json', () => {
  const before = './__fixtures__/before.json';
  const after = './__fixtures__/after.json';
  const expected = fs.readFileSync('./__fixtures__/expected.txt', 'utf-8');
  expect(gendiff(before, after)).toEqual(expected);
});
