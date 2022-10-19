const btn = document.getElementById("btn");
const colorName = document.getElementById("color-name");
const background = document.querySelector(".bg-color");

function randomHex() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btn.addEventListener("click", function () {
  let newRandom = randomHex();
  background.style.backgroundColor = newRandom;
  colorName.textContent = newRandom;
});
