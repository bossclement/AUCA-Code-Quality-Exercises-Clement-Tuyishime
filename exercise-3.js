function sum(array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }

  if (array.length === 1) {
    return array[0];
  }

  return sum((array = [array[0] + array[1], ...array.slice(2)]));
}

console.log(sum([1, 2, 3]));
