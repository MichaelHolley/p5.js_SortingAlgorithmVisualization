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
let depth = 1; // It keeps a track of recursions


function draw() {
  if(depth< values.length){
  background(50);
  noStroke();
  frameRate(1);
  displayBars(values);
  values = mergeSort(values, depth);
  depth++;}
}


function displayBars(values) {
  for(let k = 0; k < values.length; k++) {
      fill(200);
      rect(k * barWidth, height - values[k], barWidth, values[k]);
    }
}

function mergeSort(a, d) {
  if (a.length <= 1) {
    return a;
  }
  d--;
  if (d < 1){
    return a;
  }
  var mid = Math.round((a.length / 2));
  var left = a.slice(0, mid);
  var right = a.slice(mid);
  return merge(mergeSort(left,d), mergeSort(right, d));
}

function merge(left, right) {
  sorted = [];
  while (left && left.length > 0 && right && right.length > 0) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    }
    else {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}