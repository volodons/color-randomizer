const changeBgButton = document.getElementById("button");
const body = document.getElementById("body");
const colorText = document.getElementById("color-text");

changeBgButton.addEventListener("click", setNewColor);

function setNewColor() {
  const color = getRandomHexColor();
  body.style.background = color;
  colorText.style.color = color;
  colorText.innerText = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
