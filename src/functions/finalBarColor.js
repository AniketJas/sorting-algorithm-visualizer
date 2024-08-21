import * as MyConstants from "../Constants";

export function finalBarColor(array, animationSpeed) {
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < array.length; i++) {
    setTimeout(() => {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = MyConstants.FINAL_COLOR;
    }, i * animationSpeed);
  }
}
