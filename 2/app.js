function searchArray(arr, val) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === val) {
        return true;
    }
    return searchArray(arr.slice(1), val);
}

const myArray = [1, 2, 3, 4, 5];
console.log(searchArray(myArray, 3)); // Output: true
console.log(searchArray(myArray, 6)); // Output: false