const sides = document.querySelectorAll('.sides')
const showBtn = document.querySelector('#calc-btn')
const output = document.querySelector('#output')

showBtn.addEventListener('click', clickHandler)

function clickHandler() {
  const sideOneLength = Number(sides[0].value)
  const sideTwoLength = Number(sides[1].value)
  if (sideOneLength > 0 && sideTwoLength > 0) {
    let sqrtOfTotalLength = Math.sqrt(
      sideOneLength * sideOneLength + sideTwoLength * sideTwoLength
    )
    showMessage(
      `The length of hypotenuse is ${sqrtOfTotalLength.toFixed(2)}`,
      'orange'
    )
  } else {
    showMessage('Please fill all the fileds with positive value🙁', 'red')
  }
}

function showMessage(msg, color) {
  output.style.background = color
  output.innerText = msg
}
