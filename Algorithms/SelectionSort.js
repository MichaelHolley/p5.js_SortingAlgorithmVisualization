class SelectionSort extends SortingAlgorithm {

    i = 0;

    constructor(values) {
        super(values);
    }

    step() {
        if (this.i < values.length) {
            for (let j = this.i + 1; j < values.length; j++) {
                if (values[this.i] > values[j]) {
                    super.swap(values, this.i, j);
                }
                super.incComparisons();
            }

            this.i++;
        }
    }
}