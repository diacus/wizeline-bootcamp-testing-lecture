import { fastFibo } from './fibonacci';

describe('fastFibo', () => {
  it('with positive number', () => {
    expect(fastFibo(5)).toBe(8);
  });

  it('with negative number should fail', () => {
    expect(() => fastFibo(-1))
      .toThrowError(/The argument has to be positive or zero but got -1/);
  });
});
