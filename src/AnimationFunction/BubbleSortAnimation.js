import { bubbleSort } from "../Algorithms/BubbleSort";
import * as MyConstants from "../Constants";

export default function BubbleSortAnimation(array) {
  console.log("Bubble Sort");
  const animations = bubbleSort(array);
  console.log(animations);

  const arrayBars = document.getElementsByClassName("array-bar");
  var len = arrayBars.length;

  function lastBarColorChange() {
    console.log(len);
    len--;
    const arrayBarStyle = arrayBars[len].style;
    arrayBarStyle.backgroundColor = MyConstants.FINAL_COLOR;
  }

  for (let i = 0; i < animations.length; i++) {
    if (animations[i].length === 1) {
      setTimeout(() => {
        lastBarColorChange();
      }, i * MyConstants.ANIMATION_SPEED_MS);
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
      }, i * MyConstants.ANIMATION_SPEED_MS);
    }
  }

  for (let i = 0; i < arrayBars.length; i++) {
    setTimeout(() => {
      arrayBars[i].style.backgroundColor = MyConstants.FINAL_COLOR;
    }, MyConstants.ANIMATION_SPEED_MS * animations.length);
  }
}
