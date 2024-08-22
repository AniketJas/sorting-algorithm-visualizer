export function quickSort(array) {
  const animations = [];
  if (array.length <= 1) {
    return array;
  }

  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
    const pi = partition(array, startIdx, endIdx, animations);
    quickSortHelper(array, startIdx, pi - 1, animations);
    quickSortHelper(array, pi + 1, endIdx, animations);
  }
}

function partition(array, low, high, animations) {
  const pivot = array[high];
  let i = low - 1;

  animations.push([high, pivot]);

  for (let j = low; j < high; j++) {
    if (array[j] < pivot) {
      i++;
      animations.push([i, j, array[i], array[j]]);
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  animations.push([i + 1, high, array[i + 1], array[high]]);
  [array[i + 1], array[high]] = [array[high], array[i + 1]];
  return i + 1;
}
