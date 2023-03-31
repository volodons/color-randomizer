function changeColor() {
  let colorName = document.getElementById("color-name");
  let number = Math.random();
  if (number < 0.1) {
    document.querySelector("body").style.background = "red";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "red";
    colorName.textContent = "RED";
  } else if (number > 0.1 && number < 0.2) {
    document.querySelector("body").style.background = "orange";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "orange";
    colorName.textContent = "ORANGE";
  } else if (number > 0.2 && number < 0.3) {
    document.querySelector("body").style.background = "yellow";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "yellow";
    colorName.textContent = "YELLOW";
  } else if (number > 0.3 && number < 0.4) {
    document.querySelector("body").style.background = "green";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "green";
    colorName.textContent = "GREEN";
  } else if (number > 0.4 && number < 0.5) {
    document.querySelector("body").style.background = "aqua";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "aqua";
    colorName.textContent = "AQUA";
  } else if (number > 0.5 && number < 0.6) {
    document.querySelector("body").style.background = "blue";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "blue";
    colorName.textContent = "BLUE";
  } else if (number > 0.6 && number < 0.7) {
    document.querySelector("body").style.background = "white";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "white";
    colorName.textContent = "WHITE";
  } else if (number > 0.7 && number < 0.8) {
    document.querySelector("body").style.background = "brown";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "brown";
    colorName.textContent = "BROWN";
  } else if (number > 0.8 && number < 0.9) {
    document.querySelector("body").style.background = "pink";
    document.querySelector("#text").style.background = "black";
    document.querySelector("#text").style.color = "white";
    document.querySelector("#color-name").style.color = "pink";
    colorName.textContent = "PINK";
  } else if (number > 0.9) {
    document.querySelector("body").style.background = "black";
    document.querySelector("#text").style.background = "white";
    document.querySelector("#text").style.color = "black";
    document.querySelector("#color-name").style.color = "black";
    colorName.textContent = "BLACK";
  }
}
