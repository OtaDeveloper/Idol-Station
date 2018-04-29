function setup() {
  createCanvas(500,500)
  background(0)
}

function draw() {
  first()
}

function first() {
  if(keyIsPressed === true) {
    fill('#20bd5f')
  } else {
    fill('#ffb61a')
  }
  rect(40,40,40,40)
}

function second() {
  if(keyIsPressed === true) {
    fill(50)
  } else {
    fill(40)
  }
  rect(50,50,50,50)
}
