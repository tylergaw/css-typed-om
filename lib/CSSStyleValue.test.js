import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import CSSStyleValue from './CSSStyleValue.js';

describe('class CSSStyleValue', () => {
  it('throws when tried to use with constructor', () => {
    assert.throws(
      () => {
        new CSSStyleValue();
      },
      TypeError
    );
  });

  it('parses standard property values', () => {
    const result = CSSStyleValue.parse('width', '20px');
    assert.equal(result.value, 20);
    assert.equal(result.unit, 'px');
  })
});
