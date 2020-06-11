import sum from '../src/sum.js'

describe('sum function', () => {
  it('sums up two numbers', () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
