function calculateFactorial(n) {
  if (n < 1) {
    return undefined;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
