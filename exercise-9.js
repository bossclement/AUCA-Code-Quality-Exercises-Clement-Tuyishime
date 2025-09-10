function calculateMatrixSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i].reduce((sum, current) => sum + current, 0);
  }

  return sum;
}
