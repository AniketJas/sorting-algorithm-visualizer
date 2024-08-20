import * as MyConstants from "../Constants";

export function resetArray(size) {
  const array = [];

  for (let i = 0; i < size; i++) {
    array.push(randomIntFromIntervals(5, 550));
  }

  const arrayBars = document.getElementsByClassName("array-bar");
  for (let i = 0; i < arrayBars.length; i++) {
    arrayBars[i].style.backgroundColor = MyConstants.PRIMARY_COLOR;
  }

  return array;
}

function randomIntFromIntervals(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
