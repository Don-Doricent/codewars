const makeNegative = require('./index.js');

describe('makeNegative', () => {
  test('positive numbers become negative', () => {
    expect(makeNegative(1)).toBe(-1);
    expect(makeNegative(5)).toBe(-5);
    expect(makeNegative(0.12)).toBe(-0.12);
  });

  test('negative numbers and zero remain unchanged', () => {
    expect(makeNegative(-1)).toBe(-1);
    expect(makeNegative(-5)).toBe(-5);
    expect(makeNegative(0)).toBe(0);
  });
});
