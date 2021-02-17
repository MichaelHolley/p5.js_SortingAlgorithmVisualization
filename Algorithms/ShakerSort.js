class ShakerSort extends SortingAlgorithm {

    i;

    constructor(values) {
        super(values);
        this.i = values.length - 1
    }

    step() {
        let swapped = false;
        let temp, j;

        // backwards
        for (j = values.length - 1; j > this.i; j--) {
            if (values[j] < values[j - 1]) {
                super.swap(values, j, j -1);
                swapped = true;
            }
            super.incComparisons();
        }

        //forwards
        for (j = 0; j < this.i; j++) {
            if (values[j] > values[j + 1]) {
                super.swap(values, j, j + 1);
                swapped = true;
            }
            super.incComparisons();
        }

        if (!swapped) {
            isSorted = true;
        }

        this.i--;
    }
}