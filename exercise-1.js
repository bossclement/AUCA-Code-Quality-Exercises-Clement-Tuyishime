function depth(array) {
  if (!Array.isArray(array)) {
    return 0;
  }

  let size = 1;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      size += depth(array[i]);
    }
  }
  return size;
}

console.log(depth([1, [1, 2, [1, [2], [5]]]]));
