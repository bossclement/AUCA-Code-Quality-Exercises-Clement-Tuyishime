function removeDups(array) {
  return [...new Set(array)];
}

console.log(removeDups([1, 2, 2, 4]));
