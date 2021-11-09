function computeFactorial(number) {
  console.log('computing factorial');
  const go = (n, a) => {
    if (n < 2) return a;
    return go (n - 1, a * n);
  }

  return go(number, 1);
}

function computeFibonacci(number) {
  console.log('computing fibonacci');
  const go = (n, a, b) => {
    if (n === 0) return a;
    if (n === 1) return b;

    return go(n - 1, b, a + b);
  }

  return go(number, 1, 1);
}

export {
  computeFactorial,
  computeFibonacci,
};
