const quizform = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#calc-btn");
const output = document.querySelector(".output");

const correctAnswers = [
  "90°",
  "Equilateral triangle",
  "45°",
  "All of these",
  "a + b + c",
  "Right angle",
  "Isosceles triangle",
  "Perimeter"
];

function clickHandler() {
  const userInput = new FormData(quizform);
  let score = 0,
    index = 0;
  for (let value of userInput.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  showMessage(`Your score is ${score} out of 8!!`, "orange");
}

function showMessage(msg, color) {
  output.style.background = color;
  output.innerText = msg;
}

submitBtn.addEventListener("click", clickHandler);
