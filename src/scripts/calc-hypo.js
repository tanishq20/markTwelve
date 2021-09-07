const sideOne = document.querySelector("#side-one");
const sideTwo = document.querySelector("#side-two");
const showBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

showBtn.addEventListener("click", clickHandler);

function clickHandler() {
  const sideOneLength = Math.pow(Number(sideOne.value), 2);
  const sideTwoLength = Math.pow(Number(sideTwo.value), 2);
  const totalLength = sideOneLength + sideTwoLength;
  let sqrtOfTotalLength = Math.sqrt(totalLength);
  showMessage(`The length of hypotenuse is ${sqrtOfTotalLength}`, "orange");
}

function showMessage(msg, color) {
  output.style.background = color;
  output.innerText = msg;
}
