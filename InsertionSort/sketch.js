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
let i = 1;

function draw() {
  background(50);
  noStroke();
  frameRate(60);

  if (i < values.length) {
    let temp = values[i];
    let j = i;
    while(j > 0 && values[j-1] > temp) {
      values[j] = values[j-1];
      j--;
      comparisons++;
    }
    values[j] = temp;
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
    if(k == i)
      fill(255, 0, 0);
    else if(isSorted)
      fill(255, 0, 0);
    else
      fill(200);
    rect(k * barWidth, height - values[k], barWidth, values[k]);
  }
  fill(0, 255, 0);
  textSize(20);
  text("Comparisons: " + comparisons, 20, 20);
}
