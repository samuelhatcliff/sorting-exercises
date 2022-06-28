function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let swapped = false;
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                let number = array[j];
                array[j] = array[j + 1];
                array[j + 1] = number
                swapped = true
            }
        }
        if (!swapped) return array
    }
    return array
}

module.exports = bubbleSort;


