import { test, expect } from '@jest/globals';
import fs from 'fs';
import gendiff from '../src/index.js';

const expected = fs.readFileSync('./__fixtures__/expected.txt', 'utf-8');

test('flat json', () => {
  const beforeJson = './__fixtures__/before.json';
  const afterJson = './__fixtures__/after.json';
  expect(gendiff(beforeJson, afterJson)).toEqual(expected);
});

test('flat yaml', () => {
  const beforeYaml = './__fixtures__/before.yml';
  const afterYaml = './__fixtures__/after.yml';
  expect(gendiff(beforeYaml, afterYaml)).toEqual(expected);
});
