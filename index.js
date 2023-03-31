function isPalindrome(word) {
    const length = word.length;
    for (let i = 0; i < length / 2; i++) {
      if (word[i] !== word[length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  

/* 
  Add your pseudocode here
Pseudocode:

Define a function called isPalindrome that accepts a parameter called "word"
Get the length of the "word" and assign it to a constant variable called "length"
Loop through the first half of the "word" using a for loop that starts from 0 to length / 2
If the character at the current position "i" is not equal to the character at the opposite position "length - 1 - i", return false
If the loop finishes successfully without returning false, the "word" is a palindrome, return true

*/


/*
  Add written explanation of your solution here
  Explanation:
The function isPalindrome takes in a word and checks if it is a palindrome or not. A palindrome is a word that is spelled the same way forwards and backwards.

The function does this by first finding the length of the input word. It then loops through half of the word's length and checks if the character at the current position "i" is equal to the character at the opposite position "length - 1 - i". If they are not equal, the function returns false. If the loop completes successfully without returning false, the word is a palindrome, and the function returns true.

The final part of the code is a test to ensure that the function is working correctly. It calls the isPalindrome function twice, passing in "racecar" and "robot" as arguments respectively. The expected output for "racecar" is true, and the expected output for "robot" is false. The actual output is also shown to verify that the function is working correctly. Finally, the function is exported so that it can be used in other parts of the code

*/

// You can run ``node index.js to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
