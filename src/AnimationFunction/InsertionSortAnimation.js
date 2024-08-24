import { insertionSort } from "../Algorithms/InsertionSort";
import { generateButtonToggle } from "../functions/generateButtonToggle";
import * as MyConstants from "../Constants";

export default function InsertionSortAnimation(array, animationSpeed) {
  console.log("Insertion Sort");

  const animations = insertionSort(array);
  console.log(animations);

  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < animations.length; i++) {
    const [idxOne, idxTwo, updateValue] = animations[i];

    setTimeout(() => {
      const barOneStyle = arrayBars[idxOne].style;
      const barTwoStyle = arrayBars[idxTwo].style;

      barOneStyle.backgroundColor = MyConstants.SECONDARY_COLOR;
      barTwoStyle.backgroundColor = MyConstants.SECONDARY_COLOR;

      barTwoStyle.height = `${updateValue}px`;

      setTimeout(() => {
        barOneStyle.backgroundColor = MyConstants.ANIMATION_COLOR;
        barTwoStyle.backgroundColor = MyConstants.ANIMATION_COLOR;
      }, 10);
    }, i * animationSpeed);
  }

  for (let i = 0; i < arrayBars.length; i++) {
    setTimeout(() => {
      arrayBars[i].style.backgroundColor = MyConstants.FINAL_COLOR;
      generateButtonToggle(animationSpeed);
    }, animationSpeed * animations.length);
  }
}
