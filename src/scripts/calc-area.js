const sides = document.querySelectorAll('.sides')
const showBtn = document.querySelector('#calc-btn')
const output = document.querySelector('#output')

showBtn.addEventListener('click', () => {
  const baseValue = Number(sides[0].value)
  const heightValue = Number(sides[1].value)
  if (baseValue > 0 && heightValue > 0) {
    const area = (baseValue * heightValue) / 2
    showMessage(`The area of the triangle is ${area.toFixed(2)} cm²`, 'green')
  } else {
    showMessage('Please fill all the fileds with positive value🙁', 'red')
  }
})

function showMessage(msg, color) {
  output.style.background = color
  output.innerText = msg
}
