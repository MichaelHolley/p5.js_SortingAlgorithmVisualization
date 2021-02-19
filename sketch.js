let algSelection;
let displaySelection;

let canvasWidth = 1300;
let canvasHeight = 800;

let numberOfObjects = 200;
let maxValueHeight = canvasHeight - 50;
let itemWidth = canvasWidth / numberOfObjects;

let values = new Array(numberOfObjects);
let alg;

function setup() {
    algSelection = createSelect();
    algSelection.option('Bubble');
    algSelection.option('Insertion');
    algSelection.option('Selection');
    algSelection.option('Shaker');
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
    frameRate(20);
    displayValues();
}

function draw() {
    alg.step();
    displayValues();
}

function changeAlg() {
    let selection = algSelection.value();

    setRandomValues();

    switch (selection) {
        case 'Bubble':
            alg = new BubbleSort(values);
            break;
        case 'Insertion':
            alg = new InsertionSort(values);
            break;
        case 'Selection':
            alg = new SelectionSort(values);
            break;
        case 'Shaker':
            alg = new ShakerSort(values);
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
                point(k * itemWidth + itemWidth / 2, height - values[k]);
                break;
        }

        this.resetFillAndStroke();
    }

    noStroke();
    textSize(17);
    text("Comparisons: " + alg.comparisons, 170, 30);
}

function resetCanvas() {
    clear();
    background(50, 50, 50);
    this.resetFillAndStroke();
}

function resetFillAndStroke() {
    fill(200, 200, 200);
    stroke(200, 200, 200);
}

function setRandomValues() {
    for (let i = 0; i < values.length; i++) {
        values[i] = random(maxValueHeight) + 5;
    }
}