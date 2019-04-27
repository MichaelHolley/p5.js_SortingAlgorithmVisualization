let values = new Array(5);
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

let attempts = 0;
let isSortedBool = false;

function draw() {
  background(50);
  noStroke();
  frameRate(10);

  values = shuffle(values);
  attempts++;
  
  if(isSorted()) {
    console.log("finished");
    isSortedBool = true;
    noLoop();
  }
  displayBars();
}

function displayBars() {
  if(!isSortedBool)
    fill(200);
  else
    fill(255, 0, 0);
  for(let k = 0; k < values.length; k++) {
    rect(k * barWidth, height - values[k], barWidth, values[k]);
  }
  fill(0, 255, 0);
  textSize(20);
  text("Attempts: " + attempts, 20, 20);
}

//Reference: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function isSorted() {
  for(let i = 1; i < values.length; i++){
    if (values[i-1] > values[i]) {
        return false;
    }
}
  return true;
}