/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
The palindrome does not need to be limited to just dictionary words.
*/

const checkPalPerm = string => {
  charCount = new Array(128).fill(0);
  let trimmed = string.replace(/ /g, "").toLowerCase();
  for (let i = 0; i < trimmed.length; i++) {
    letterVal = trimmed.charCodeAt(i);
    charCount[letterVal] += 1;
  }
  let oddCount = 0;
  for (i = 0; i < 128; i++) {
    if (charCount[i] % 2 != 0) {
      oddCount += 1;
      if (oddCount > 1) {
        // console.log(`ODD COUNT: ${oddCount}`)
        return false;
      }
    }
    // console.log(`char: ${charCount[i]}, oddCount: ${oddCount}, index: ${i}`)
  }
  return true;
};

let string = "Using this as a test string";
let result1 = checkPalPerm(string);

string = "taco cat";
result2 = checkPalPerm(string);

string = "palindrome palindromev";
result3 = checkPalPerm(string);

string = "Race rac";
result4 = checkPalPerm(string);

string = "Race car";
result5 = checkPalPerm(string);

string = "Race cars";
result6 = checkPalPerm(string);

results = `1. Result should be false. Result: ${result1}\n2. Result should be true. Result: ${result2}\n3. Result should be true. Result: ${result3}\n4. Result should be true. Result: ${result4}\n5. Result should be true. Result: ${result5}\n6. Result should be false. Result: ${result6}`;
console.log(results);
