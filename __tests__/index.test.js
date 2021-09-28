const index = require('../index');

describe('Sum function', () => {

  test('should correctly sum two numbers', () => {
    const result = index.sum(7, 23); //30

    expect(result).toBe(30);
  });

  test('should only accept numbers as parameters', () => {
    expect(() => {
      index.sum('a', 3);
    }).toThrow();
  });

});

describe('runCallback function', () => {

  test('actually runs the callback function', () => {
    const cb = jest.fn();

    index.runCallback(cb);

    expect(cb).toHaveBeenCalled();
  });

});
