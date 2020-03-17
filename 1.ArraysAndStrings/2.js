// Check Permutation: Given 2 strings, write a method to decide of one is a permutation of the other.

const checkPermutation = (string1, string2) => {
  const sortedString1 = string1.split("").sort();
  const sortedString2 = string2.split("").sort();
  if (string1.length != string2.length) {
    return false;
  }
  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] != sortedString2[i]) {
      return false;
    }
  }
  return true;
};

let string1 = "These two will not match";
let string2 = "Not the same strings!!!!";
result = checkPermutation(string1, string2);
console.log(`Result should be false. Result: ${result}`);

string1 = "These strings are the same";
string2 = "These strings are the same";
result = checkPermutation(string1, string2);
console.log(`Result should be true. Result: ${result}`);

string1 = "These strings are different lengths";
string2 = "These strings are not the same length";
result = checkPermutation(string1, string2);
console.log(`Result should be false. Result: ${result}`);
