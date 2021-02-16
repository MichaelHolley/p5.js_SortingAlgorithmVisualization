class SelectionSort extends SortingAlgorithm {

    i = 0;

    constructor(values) {
        super(values);
    }

    step() {
        if (this.i < values.length) {
            for (let j = this.i + 1; j < values.length; j++) {
                if (values[this.i] > values[j]) {
                    let temp = values[this.i];
                    values[this.i] = values[j];
                    values[j] = temp;
                }
                super.incComparisons();
            }

            this.i++;
        }
    }
}