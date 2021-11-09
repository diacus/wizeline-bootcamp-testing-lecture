function slowFibo(n) {
  if (n < 2) return 1;
  return slowFibo(n - 1) + slowFibo(n - 2);
}

function fastFibo(n) {
  if (n < 0)
    throw new Error(`The argument has to be positive or zero but got ${n}`);

  const go = (n, a, b) => {
    if (0 === n) return a;
    if (1 === n) return b;
    return go(n - 1, b , a + b);
  };

  return go(n, 1, 1);
}

export {
  fastFibo,
  slowFibo,
};
