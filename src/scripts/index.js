const angles = document.querySelectorAll('.angle')
const calcBtn = document.querySelector('#calc-btn')
const output = document.querySelector('#output')

calcBtn.addEventListener('click', () => {
  const sum = sumOfAngles(
    Number(angles[0].value),
    Number(angles[1].value),
    Number(angles[2].value)
  )
  if (
    Number(angles[0].value) > 0 &&
    Number(angles[1].value) > 0 &&
    Number(angles[2].value) > 0
  ) {
    checkIsTriangle(sum)
  } else {
    showMessage('All Angles must be greater than 0😪', 'orange')
  }
})

function sumOfAngles(angleOne, angleTwo, angleThree) {
  const sum = angleOne + angleTwo + angleThree
  return sum
}

function checkIsTriangle(sum) {
  if (sum === 180) {
    showMessage('Yaay!! Ths angle forms a triangle🎉', 'green')
  } else {
    showMessage('Ooops, angles does not form a triangle', 'red')
  }
}

function showMessage(msg, color) {
  console.log(msg)
  output.style.background = color
  output.innerText = msg
}
