let i1, i2, ans, button
let hue = 0
let hueAdd = 1
let sat = 60
let bri = 100
let mat
let matPicked = ['add', 'sub', 'mul', 'div']

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  console.log('EASTER EGG: TYPE 9 + 10')
  colorMode(HSB)
  createCanvas(windowWidth, windowHeight);
  background('grey')
  mat = matPicked[0]
  ans = 0

  //first input
  i1 = createInput('0')
  i1.position(width / 2 - i1.width / 2, height / 2 - 30)
  i1.input(doit)

  //second input
  i2 = createInput('0');
  i2.position(width / 2 - i2.width / 2, height / 2 + 30)
  i2.input(doit)

  //button for switching between different math modes
  button = createButton('Switch Math')
  button.position(width / 2 - button.width / 2, height / 2 - 60)
  button.mousePressed(changeMath)
  button.mouseWheel(sadnessMode)

}

function draw() {
  background(hue, sat, bri)

  //change the hue constantly
  hue += hueAdd
  if (hue >= 360) {
    hue = 0
  }

  //text for the correct calculator
  fill(hue, sat + 40, bri - 50)
  textAlign(CENTER)
  textSize(40)
  text('The Correct Calculator', width / 2, 100)
  textSize(15)


  //detect the math mode and change the text to the correct math mode
  if (mat == matPicked[0]) {
    textSize(15)
    text('+', width / 2, height / 2 + 15)
    textSize(30)
    text('ADDITION', width / 2, height / 2 - 80)
  } else if (mat == matPicked[1]) {
    textSize(15)
    text('-', width / 2, height / 2 + 15)
    textSize(30)
    text('SUBTRACTION', width / 2, height / 2 - 80)
  } else if (mat == matPicked[2]) {
    textSize(15)
    text('x', width / 2, height / 2 + 15)
    textSize(30)
    text('MULTIPLICATION', width / 2, height / 2 - 80)
  } else if (mat == matPicked[3]) {
    textSize(15)
    text('÷', width / 2, height / 2 + 15)
    textSize(30)
    text('DIVISION', width / 2, height / 2 - 80)
  }

  //= sign text
  text('=', width / 2, height / 2 + 75)
  text(ans, width / 2, height / 2 + 100)

  //constantly change dom positions
  i1.position(width / 2 - i1.width / 2, height / 2 - 30)
  i2.position(width / 2 - i2.width / 2, height / 2 + 30)
  button.position(width / 2 - button.width / 2, height / 2 - 60)
}

function sadnessMode() {
  hueAdd = 0
  sat = 0
  bri = 30
}

function changeMath() {
  if (mat == matPicked[0]) {
    mat = matPicked[1];
  } else if (mat == matPicked[1]) {
    mat = matPicked[2];
  } else if (mat == matPicked[2]) {
    mat = matPicked[3];
  } else if (mat == matPicked[3]) {
    mat = matPicked[0];
  }
  doit()
}

function doit() {
  let first = parseInt(i1.value(), 10)
  let second = parseInt(i2.value(), 10)

  //addition
  if (mat == matPicked[0]) {
    ans = first + second
    if ((first == 9 && second == 10) || (first == 10 && second == 9)) {
      ans = 21
    }
  } else if (mat == matPicked[1]) {
    //subtraction
    ans = first - second
  } else if (mat == matPicked[2]) {
    //multiply
    ans = first * second
  } else if (mat == matPicked[3]) {
    //division
    ans = first / second
  }

  if (ans >= 999999999999) {
    ans = 'ANSWER TOO HIGH'
  }
}