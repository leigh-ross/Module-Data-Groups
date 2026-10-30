// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr) {
    let first = arr.shift();
    let last = arr.pop();
    arr.push(first);
    arr.unshift(last);
    return arr;
}

const myArray = [5, 2, 3, 4, 1];
swapFirstAndLast(myArray);
console.log(myArray); // what output should we expect?
