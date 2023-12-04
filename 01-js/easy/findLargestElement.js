/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(lst) {
    //With libarary
    let maxi = Math.max(...lst);
    return maxi;
    //Without libarary
    // let maxi = Number.MIN_SAFE_INTEGER;
    // for(let i =0;i<lst.length;i++){
    //     maxi = Math.max(maxi,lst[i]);
    // }
    // console.log(lst.length);
    // return maxi;
}

module.exports = findLargestElement;
