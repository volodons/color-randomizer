// FIX BACKGROUND AND TEXT COLOR
// ADD STYLES TO THE NAME OF COLOR

function changeColor() {
  var colorName = document.getElementById("color-name");
  var number = Math.random();
  if (number < 0.1) {
    document.querySelector("body").style.background = "red";
    colorName.textContent = "RED";
  } else if (number > 0.1 && number < 0.2) {
    document.querySelector("body").style.background = "orange";
    colorName.textContent = "ORANGE";
  } else if (number > 0.2 && number < 0.3) {
    document.querySelector("body").style.background = "yellow";
    colorName.textContent = "YELLOW";
  } else if (number > 0.3 && number < 0.4) {
    document.querySelector("body").style.background = "green";
    colorName.textContent = "GREEN";
  } else if (number > 0.4 && number < 0.5) {
    document.querySelector("body").style.background = "aqua";
    colorName.textContent = "AQUA";
  } else if (number > 0.5 && number < 0.6) {
    document.querySelector("body").style.background = "blue";
    colorName.textContent = "BLUE";
  } else if (number > 0.6 && number < 0.7) {
    document.querySelector("body").style.background = "white";
    colorName.textContent = "WHITE";
  } else if (number > 0.7 && number < 0.8) {
    document.querySelector("body").style.background = "brown";
    colorName.textContent = "BROWN";
  } else if (number > 0.8 && number < 0.9) {
    document.querySelector("body").style.background = "pink";
    colorName.textContent = "PINK";
  } else if (number > 0.9) {
    document.querySelector("body").style.background = "black";
    document.querySelector("#text").style.background = "white";
    document.querySelector("#text").style.color = "black";
    colorName.textContent = "BLACK";
  }
}
