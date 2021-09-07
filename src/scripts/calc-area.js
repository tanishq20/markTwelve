const base = document.querySelector("#base");
const height = document.querySelector("#height");
const showBtn = document.querySelector("#calc-btn");
const output = document.querySelector("#output");

showBtn.addEventListener("click", () => {
  const baseValue = Number(base.value);
  const heightValue = Number(height.value);
  const area = (baseValue * heightValue) / 2;
  showMessage(`The area of the triangle is ${area}`, "orange");
});

function showMessage(msg, color) {
  output.style.background = color;
  output.innerText = msg;
}
