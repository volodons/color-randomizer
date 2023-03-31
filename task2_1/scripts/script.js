function changeColor() {
  var colorName = document.getElementById("color-name");
  var number = Math.random();
  if (number < 0.1) {
    document.querySelector("body").style.background = "red";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "RED";
  } else if (number > 0.1 && number < 0.2) {
    document.querySelector("body").style.background = "orange";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "ORANGE";
  } else if (number > 0.2 && number < 0.3) {
    document.querySelector("body").style.background = "yellow";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "YELLOW";
  } else if (number > 0.3 && number < 0.4) {
    document.querySelector("body").style.background = "green";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "GREEN";
  } else if (number > 0.4 && number < 0.5) {
    document.querySelector("body").style.background = "aqua";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "AQUA";
  } else if (number > 0.5 && number < 0.6) {
    document.querySelector("body").style.background = "blue";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "BLUE";
  } else if (number > 0.6 && number < 0.7) {
    document.querySelector("body").style.background = "white";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "WHITE";
  } else if (number > 0.7 && number < 0.8) {
    document.querySelector("body").style.background = "brown";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "BROWN";
  } else if (number > 0.8 && number < 0.9) {
    document.querySelector("body").style.background = "pink";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    colorName.textContent = "PINK";
  } else if (number > 0.9) {
    document.querySelector("body").style.background = "black";
    document.querySelector("#text").style.background = "white";
    document.querySelector("#text").style.color = "black";
    colorName.textContent = "BLACK";
  }
}
