function swap(array, xp, yp) {
  let temp = array[xp];
  array[xp] = array[yp];
  array[yp] = temp;
}

export function selectionSort(array) {
  const animations = [];
  const size = array.length;

  var i, j, min_idx;

  for (i = 0; i < size - 1; i++) {
    min_idx = i;

    for (j = i + 1; j < size; j++) {
      if (array[j] < array[min_idx]) {
        min_idx = j;
      }
    }

    if (min_idx !== i) {
      animations.push([i, min_idx, array[i], array[min_idx]]);
    }
    swap(array, min_idx, i);
  }

  return animations;
}
