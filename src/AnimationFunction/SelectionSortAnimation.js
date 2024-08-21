import { selectionSort } from "../Algorithms/SelectionSort";
import * as MyConstants from "../Constants";

export default function SelectionSortAnimation(array, animationSpeed) {
  console.log("Selection Sort");

  const animations = selectionSort(array);
  const arrayBars = document.getElementsByClassName("array-bar");

  var len = 0;
  var i;

  function firstBarColorChange() {
    const arrayBarStyle = arrayBars[len++].style;
    arrayBarStyle.backgroundColor = MyConstants.FINAL_COLOR;
  }

  for (i = 0; i < animations.length; i++) {
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
        barOneStyle.backgroundColor = MyConstants.FINAL_COLOR;
        barTwoStyle.backgroundColor = MyConstants.PRIMARY_COLOR;
      }, 100);
    }, i * animationSpeed);
  }

  for (i = 0; i < array.length; i++) {
    setTimeout(() => {
      firstBarColorChange();
    }, i * animationSpeed);
  }
}
