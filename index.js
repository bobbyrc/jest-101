function sum(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('Sum function only accepts numbers');
  }

  return num1 + num2;
}

function runCallback(callback) {
  callback();

  return 'ok';
}

module.exports = {
  sum,
  runCallback
}