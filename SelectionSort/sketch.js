let values = new Array(500);
let maxBarLength;
let barWidth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  maxBarLength = height - 10;
  barWidth = width / values.length;
  for(let i = 0; i < values.length; i++) {
    values[i] = random(maxBarLength);
  }
}

let isSorted = false;
let comparisons = 0;
let i = 0;

function draw() {
  frameRate(10);
  background(50);
  noStroke();

  if (i < values.length - 1) {
    for(let j = i + 1; j < values.length; j++) {
      if(values[i] > values[j]) {
        let temp = values[i];
        values[i] = values[j];
        values[j] = temp;
      }
      comparisons++;
    }
  } else {
      console.log("finished");
      isSorted = true;
      noLoop();
  }
  i++;

  displayBars();
}

function displayBars() {
  for(let k = 0; k < values.length; k++) {
    if(isSorted)
      fill(255, 0, 0);
    else
      fill(200);
    rect(k * barWidth, height - values[k], barWidth, values[k]);
  }
  fill(0, 255, 0);
  textSize(20);
  text("Comparisons: " + comparisons, 20, 20);
}