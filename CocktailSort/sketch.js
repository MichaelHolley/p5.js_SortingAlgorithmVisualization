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

let comparisons = 0;
let i = values.length - 1;
isSorted = false;

function draw() {
  background(50);
  noStroke();
  frameRate(60);

  let swapped = false;
  let temp, j;

  // backwards
  for (j = values.length -1; j > i; j--) {
    if (values[j] < values[j - 1]) {
        temp = values[j];
        values[j] = values[j - 1];
        values[j - 1] = temp;
        swapped = true;
    }
    comparisons++;
  }

  //forwards
  for (j = 0; j < i; j++) {
      if (values[j] > values[j + 1]) {
          temp = values[j];
          values[j] = values[j + 1];
          values[j + 1] = temp;
          swapped = true;
      }
      comparisons++;
  }
  if (!swapped) {
      isSorted = true;
      displayBars;
      noLoop();
  }
  displayBars();
  i--;
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
