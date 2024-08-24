//fucntion to display selected button

export function sortButtonToggle(value, array) {
  const sortBtn = document.getElementsByClassName("sort-btn");
  const toggleButton = document.getElementsByClassName("toggleButton");
  const toggleAlgoButton = document.getElementsByClassName("toggleAlgoButton");

  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].style.backgroundColor = "transparent";
    sortBtn[i].style.color = "white";
  }

  if (value) {
    const selectedButton = document.getElementById(`${value}`);
    selectedButton.style.backgroundColor = "cyan";
    selectedButton.style.color = "black";

    for (let i = 0; i < toggleButton.length; i++) {
      toggleButton[i].disabled = true;
      toggleButton[i].style.backgroundColor = "gray";
    }

    for (let i = 0; i < toggleAlgoButton.length; i++) {
      toggleAlgoButton[i].disabled = true;
    }
  }
}
