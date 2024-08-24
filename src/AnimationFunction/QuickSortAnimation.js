import { quickSort } from "../Algorithms/QuickSort";
import { generateButtonToggle } from "../functions/generateButtonToggle";
import * as MyConstants from "../Constants";

export default function QuickSortAnimation(array, animationSpeed) {
  console.log("Quick Sort");
  const animations = quickSort(array);
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 2) {
      const idx = animations[i][0];
      setTimeout(() => {
        arrayBars[idx].style.backgroundColor = MyConstants.PIVOT_COLOR;
      }, i * animationSpeed);
    } else {
      const [idxOne, idxTwo, idxOneHeight, idxTwoHeight] = animations[i];

      setTimeout(() => {
        const barOneStyle = arrayBars[idxOne].style;
        const barTwoStyle = arrayBars[idxTwo].style;

        const temp = `${idxOneHeight}px`;

        barOneStyle.backgroundColor = MyConstants.SECONDARY_COLOR;
        barTwoStyle.backgroundColor = MyConstants.SECONDARY_COLOR;

        barOneStyle.height = `${idxTwoHeight}px`;
        barTwoStyle.height = temp;

        setTimeout(() => {
          barOneStyle.backgroundColor = MyConstants.ANIMATION_COLOR;
          barTwoStyle.backgroundColor = MyConstants.ANIMATION_COLOR;
        }, 10);
      }, i * animationSpeed);
    }
  }

  for (let i = 0; i < arrayBars.length; i++) {
    setTimeout(() => {
      arrayBars[i].style.backgroundColor = MyConstants.FINAL_COLOR;
      generateButtonToggle(animationSpeed);
    }, animationSpeed * animations.length);
  }
}
