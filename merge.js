function merge(arr1, arr2) {
    let newArr = []
    let one = 0;
    let two = 0;
    while (one < arr1.length && two < arr2.length) {
        if (arr1[one] < arr2[two]) {
            newArr.push(arr1[one]);
            one++;
        } else {
            newArr.push(arr2[two]);
            two++;
        }
    }
    if (one === arr1.length && two !== arr2.length) {
        let endOfRemaining = arr2.slice(two)
        for (let item of endOfRemaining) {
            newArr.push(item)
        }
    } else if (two === arr2.length && one !== arr1.length) {
        let endOfRemaining = arr1.slice(one)
        for (let item of endOfRemaining) {
            newArr.push(item)
        }
    }
    return newArr;
}


function mergeSort(array) {
    if (array.length <= 1) return array;
    let midpoint = Math.floor(array.length / 2)
    let array1 = mergeSort(array.slice(0, midpoint));
    let array2 = mergeSort(array.slice(midpoint));
    return merge(array1, array2)

}

testArr1 = [5];
testArr2 = [1, 3, 3, 6, 28];
console.log(merge(testArr1, testArr2), "testing merge function");
console.log(mergeSort([-3, 5, 99, 47, 5, -6, 8, 0, 23,]), "testing mergeSort")

module.exports = { merge, mergeSort };