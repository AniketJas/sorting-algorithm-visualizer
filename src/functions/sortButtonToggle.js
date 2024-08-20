//fucntion to display selected button

export function sortButtonToggle(value, array) {
  const sortBtn = document.getElementsByClassName("sort-btn");
  // const btnBox = document.querySelector("#btnBox");

  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].style.backgroundColor = "transparent";
    sortBtn[i].style.color = "white";
    // btnBox.innerHTML = "";
  }

  if (value) {
    const selectedButton = document.getElementById(`${value}`);
    selectedButton.style.backgroundColor = "cyan";
    selectedButton.style.color = "black";
  }
}
