import { mergeSort } from "../Algorithms/MergeSort";
import * as MyConstants from "../Constants";
import { generateButtonToggle } from "../functions/generateButtonToggle";

function MergeSortAnimation(array, animationSpeed) {
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
      }, i * animationSpeed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * animationSpeed);
    }
  }
  setTimeout(() => {
    generateButtonToggle(animationSpeed);
  }, animationSpeed * animations.length);
}

export default MergeSortAnimation;
