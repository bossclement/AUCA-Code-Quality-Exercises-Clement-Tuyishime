export default function calculateAverage(numbers) {
  return numbers.reduce((sum, cur) => sum + cur, 0) / numbers.length;
}
