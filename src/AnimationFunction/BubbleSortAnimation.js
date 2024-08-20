import { bubbleSort } from "../Algorithms/BubbleSort";
import * as MyConstants from "../Constants";

export default function BubbleSortAnimation(array, animationSpeed) {
  console.log("Bubble Sort");
  const animations = bubbleSort(array);

  const arrayBars = document.getElementsByClassName("array-bar");
  var len = arrayBars.length;

  function lastBarColorChange() {
    len--;
    const arrayBarStyle = arrayBars[len].style;
    arrayBarStyle.backgroundColor = MyConstants.FINAL_COLOR;
  }

  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 1) {
      setTimeout(() => {
        lastBarColorChange();
      }, (i + 1) * animationSpeed);
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
    }, animationSpeed * animations.length);
  }
}
