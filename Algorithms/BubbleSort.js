class BubbleSort extends SortingAlgorithm {

    i = 0;

    constructor(values) {
        super(values);
    }

    step() {
        if (this.i < values.length) {
            for (let j = 0; j < values.length - this.i - 1; j++) {
                let a = values[j];
                let b = values[j + 1];
                if (a > b) {
                    super.incComparisons();
                    super.swap(values, j, j + 1);
                }
            }

            this.i++;
        }
    }
}