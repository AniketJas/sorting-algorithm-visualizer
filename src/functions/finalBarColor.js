import * as MyConstants from "../Constants";

export function finalBarColor(animationSpeed) {
  const arrayBars = document.getElementsByClassName("array-bar");

  for (let i = 0; i < arrayBars.length; i++) {
    setTimeout(() => {
      const arrayBarStyle = arrayBars[i].style;
      arrayBarStyle.backgroundColor = MyConstants.FINAL_COLOR;
    }, i * animationSpeed);
  }
}
