import * as MyConstants from "../Constants";

export function bubbleSort(array) {
  let size = MyConstants.NUMBER_OF_ARRAY_BARS;

  const animations = [];

  var i, j, temp;
  var swapped;

  for (i = 0; i < size - 1; i++) {
    // animations.push([i]);
    swapped = false;

    for (j = 0; j < size - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        animations.push([j, j + 1, array[j], array[j + 1]]);

        temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        swapped = true;
      }
    }

    animations.push([i]);

    if (swapped === false) {
      break;
    }
  }

  return animations;
}
