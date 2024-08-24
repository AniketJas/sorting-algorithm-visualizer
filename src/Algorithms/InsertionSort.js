export function insertionSort(array) {
  const animations = [];

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      animations.push([j, j + 1, array[j]]);
      j = j - 1;
    }
    animations.push([i, j + 1, key]);
    array[j + 1] = key;
  }

  return animations;
}
