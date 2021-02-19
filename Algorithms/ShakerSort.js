class ShakerSort extends SortingAlgorithm {

    swapped = true;
    i = -1;
    end;

    constructor(values) {
        super(values);
        this.end = values.length - 2;
    }

    step() {
        if (this.swapped) {
            this.swapped = false;
            this.i++;

            for (let i = this.i; i <= this.end; i++) {
                if (values[i] > values[i + 1]) {
                    super.swap(values, i, i + 1);
                    this.swapped = true;
                }
            }

            if (this.swapped == false) {
                return;
            }

            this.swapped = false;
            this.end--;

            for (let j = this.end; j >= this.i; j--) {
                if (values[j] > values[j + 1]) {
                    super.swap(values, j, j + 1);
                    this.swapped = true;
                }
            }
        }
    }
}