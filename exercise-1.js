function depthOfNestedArray(array) {
  if (!Array.isArray(array)) {
    return 0;
  }

  const isArrayNested = (arrayObj) => {
    return arrayObj.some((element) => Array.isArray(element));
  };

  let sizeOfDepth = 1;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && isArrayNested(array[i])) {
      const newDepth = depthOfNestedArray(array[i]);

      if (newDepth > sizeOfDepth) sizeOfDepth = newDepth;
    }
  }

  return sizeOfDepth + 1;
}

function flattenArray(array, depth) {
  return array.flat(depth);
}

const array = [1, [1, 2, [1, [2, 5, [4, 7]], [5]]]];
console.log(flattenArray(array, depthOfNestedArray(array)));
