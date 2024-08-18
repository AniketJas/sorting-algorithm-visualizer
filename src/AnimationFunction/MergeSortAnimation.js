import { mergeSort } from "../Algorithms/MergeSort";
import * as MyConstants from "../Constants";

function MergeSortAnimation(array) {
  console.log("Merge Sort");
  const animations = mergeSort(array);
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animations.length; i++) {
    const isColorChange = i % 3 !== 2;

    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];

      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;

      const color =
        i % 3 === 0 ? MyConstants.SECONDARY_COLOR : MyConstants.FINAL_COLOR;

      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * MyConstants.ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * MyConstants.ANIMATION_SPEED_MS);
    }
  }
}

export default MergeSortAnimation;
