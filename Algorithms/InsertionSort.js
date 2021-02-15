class InsertionSort extends SortingAlgorithm {
    i = 1;

    constructor(values) {
        super(values);
    }

    step() {
        if (this.i < values.length - 1) {
            let insert = values[this.i];
            let j = this.i;
            while (j > 0 && values[j - 1] > insert) {
                super.incComparisons();
                values[j] = values[j - 1];
                j = j - 1;
            }
            values[j] = insert;
        } else {
            noLoop();
        }
        this.i++;
    }
}