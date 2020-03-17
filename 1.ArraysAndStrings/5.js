/*
One Away: There are three types of edits that can be performed on strings: insert a character, 
remove a character, or replace a character. Given 2 strings, write a function to check if they 
are one edit (or zero edits) away.
*/

const oneAway = (string1, string2) => {
  let lengthDifference = Math.abs(string1.length - string2.length);
//   console.log(`lengthDifference: ${lengthDifference}`)
  let countChanges = lengthDifference;
  let i = 0;
  let j = 0;
  while (i < string1.length && j < string2.length && countChanges<2) {
    // if (countChanges > 1) {
    //   return false;
    // }
    // console.log(`string1: ${string1[i]}, string2: ${string2[j]}`)
    if (string1[i] != string2[j]) {
        // console.log("NOT THE SAME")
        countChanges+=1

        if (string1[i+1]===string2[j]) {
            i+=1
        }
        if (string1[i]===string2[j+1]) {
            j+=1
        }
    }
    j+=1
    i+=1
  }
  console.log("countChanges", countChanges)
  if (countChanges>1) {
      return false
  }
  return true
};

let string1 = "stringis"
let string2 = "string2"
result = oneAway(string1, string2)
console.log(result)