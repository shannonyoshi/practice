/*
One Away: There are three types of edits that can be performed on strings: insert a character, 
remove a character, or replace a character. Given 2 strings, write a function to check if they 
are one edit (or zero edits) away.
*/

const oneAway = (string1, string2) => {
  let lengthDifference = Math.abs(string1.length - string2.length);
  if (lengthDifference > 1) {
    return false;
  }
  let countChanges = 0;
  let i = 0;
  let j = 0;
  while (i < string1.length && j < string2.length && countChanges < 2) {
    // console.log(`\nCurrent letters: ${string1[i]}, ${string2[j]}\n\tcountChanges: ${countChanges}, i: ${i}, j: ${j}`)
    if (string1[i] != string2[j]) {
      countChanges += 1;
      //checks if adding to string 1 is necessary
      if (string1[i + 1] === string2[j]) {
        i += 1;
      }
      //checks if adding to string 2 is necessary
      if (string1[i] === string2[j + 1]) {
        j += 1;
      }
    }
    j += 1;
    i += 1;
  }
  if (countChanges > 1) {
    return false;
  }
  return true;
};

//if current i looks like j+1, add 1 to j

let string1 = "Try this one";
let string2 = "try thes one";
result = oneAway(string1, string2);
console.log(`Should be false. Result: ${result}`);

string1 = "True";
string2 = "Truee";
result = oneAway(string1, string2);
console.log(`Should be true. Result: ${result}`);

string1 = "pale";
string2 = "ple";
result = oneAway(string1, string2);
console.log(`Should be true. Result: ${result}`);

string1 = "bale";
string2 = "pale";
result = oneAway(string1, string2);
console.log(`Should be true. Result: ${result}`);

string1 = "pale";
string2 = "bake";
result = oneAway(string1, string2);
console.log(`Should be false. Result: ${result}`);
