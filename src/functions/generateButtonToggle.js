export function generateButtonToggle(animationSpeed) {
  const toggleButton = document.getElementsByClassName("toggleButton");
  const toggleAlgoButton = document.getElementsByClassName("toggleAlgoButton");

  for (let i = 0; i < toggleButton.length; i++) {
    toggleButton[i].disabled = false;
    toggleButton[i].style.backgroundColor = "white";
  }

  for (let i = 0; i < toggleAlgoButton.length; i++) {
    toggleAlgoButton[i].disabled = false;
  }
}
