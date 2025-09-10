export default function calculateAverage(numbers) {
  // Much cleaner code and simple to  calculate the average using reduce and array.length method
  return numbers.reduce((sum, cur) => sum + cur, 0) / numbers.length;
}
