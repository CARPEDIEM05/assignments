/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  let count = 0;
    let myVowelSet = new Set();
    myVowelSet.add("a");
    myVowelSet.add("e");
    myVowelSet.add("i");
    myVowelSet.add("o");
    myVowelSet.add("u");
    myVowelSet.add("A");
    myVowelSet.add("E");
    myVowelSet.add("I");
    myVowelSet.add("O");
    myVowelSet.add("U");
    for(let i = 0;i<str.length;i++){
        if(myVowelSet.has(str[i])){
            count++;
            console.log(str[i]);
        }
    }

    return count;
}

module.exports = countVowels;
