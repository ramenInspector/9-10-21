let i1, i2, ans
let hue = 0

function setup() {
  colorMode(HSB)
  createCanvas(windowWidth, windowHeight);
  background('grey')
  i1 = createInput('0')
  i1.position(width / 2 - 80, height / 2 - 30)
  i1.input(doit)
  i2 = createInput('0');
  i2.position(width / 2 - 80, height / 2 + 30)
  i2.input(doit)
}

function draw() {
  background(hue, 60, 100)
  hue++
  if(hue >= 360) {
    hue = 0
  }
  fill(hue, 100, 40)
  textAlign(CENTER)
  textSize(40)
  text('The Correct Calculator', width/2, 100)
  textSize(15)
  text('+', width / 2, height / 2 + 15)
  text('=', width / 2, height / 2 + 75)
  text(ans, width / 2, height / 2 + 100)
}

function doit() {
  let first = parseInt(i1.value(),10)
  let second = parseInt(i2.value(),10)
  ans = first + second
  if((first == 9 && second == 10) || ( first == 10 && second == 9)) {
    ans = 21
  }
  console.log(ans)
}