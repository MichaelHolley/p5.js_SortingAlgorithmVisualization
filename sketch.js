let algSelection;
let displaySelection;

let canvasWidth = 1300;
let canvasHeight = 800;

let numberOfObjects = 500;
let maxValueHeight = canvasHeight - 50;
let itemWidth = canvasWidth / numberOfObjects;

let values = new Array(numberOfObjects);
let alg;

function setup() {
    algSelection = createSelect();
    algSelection.option('Bubble');
    algSelection.option('Insertion');
    algSelection.option('Selection');
    algSelection.option('Bogo');
    algSelection.option('Cocktail');
    algSelection.option('Quick');
    algSelection.changed(changeAlg);
    algSelection.position(15, 15);

    displaySelection = createSelect();
    displaySelection.option('Dots');
    displaySelection.option('Bars');
    displaySelection.changed(changeDisplay);
    displaySelection.position(105, 15);

    setRandomValues();
    alg = new BubbleSort(values);

    createCanvas(canvasWidth, canvasHeight);
    frameRate(40);
    displayValues();
}

function draw() {
    alg.step();
    displayValues();
}

function changeAlg() {
    let selection = algSelection.value();

    setRandomValues();

    switch(selection) {
        case 'Bubble':
            alg = new BubbleSort(values);
            break;
        default:
            alg = new BubbleSort(values);
            break;
    }

    displayValues();
}

function changeDisplay() {
    displayValues();
}

function displayValues() {
    resetCanvas();
    let selectedDisplay = displaySelection.value();

    for (let k = 0; k < values.length; k++) {
        switch (selectedDisplay) {
            case 'Bars':
                noStroke();
                rect(k * itemWidth, height - values[k], itemWidth, values[k]);
                break;
            case 'Dots':
                strokeWeight(itemWidth);
                point(k * itemWidth + itemWidth / 2, height - values[k] + itemWidth / 2);
                break;
        }
    }

    stroke(5);
    textSize(17);
    text("Comparisons: " + alg.comparisons, 170, 30);
}

function resetCanvas() {
    clear();
    background(50, 50, 50);
    fill(200, 200, 200);
    stroke(200, 200, 200);
}

function setRandomValues() {
    for (let i = 0; i < values.length; i++) {
        values[i] = random(maxValueHeight) + 5;
    }
}