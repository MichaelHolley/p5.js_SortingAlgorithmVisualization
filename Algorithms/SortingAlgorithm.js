class SortingAlgorithm {

    comparisons = 0;
    values;

    constructor(values) {
        this.values = values;
        loop();
    }

    incComparisons() {
        this.comparisons++;
    }

    swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

}