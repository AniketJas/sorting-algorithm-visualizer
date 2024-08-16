export function consoleSortedArray(array) {
  console.log("Generated Array" + array);
  console.log("Sorted Array" + array.slice().sort((a, b) => a - b));
}
