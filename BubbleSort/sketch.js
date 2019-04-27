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
let i = 0;
let j = 0;

function draw() {
  background(50);
  noStroke();
  frameRate(60);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        comparisons++;
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;

  displayBars();
}


function displayBars() {
  for(let k = 0; k < values.length; k++) {
    if(values.length - k <= i) {
      fill(255, 0, 0);
    } else {
      fill(200);
    }
    rect(k * barWidth, height - values[k], barWidth, values[k]);
  }
  fill(0, 255, 0);
  textSize(20);
  text("Sorted: " + (i - 1) +
      "\t|\tComparisons: " + comparisons, 20, 20);

}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}