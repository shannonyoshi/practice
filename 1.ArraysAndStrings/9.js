/*
String Rotation: Assume you have a method, isSubstring, whichchecks if one word is a substring of another. 
Given 2 strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to 
isSubstring(e.g. "waterbottle" is a rotation of "erbottlewat")
*/

const isSubstring=(string1, string2) => {
    //imaginary function that checks for substrings
    return true
}

const checkRotation = (string1, string2) => {
  if (string1.length != string2.length) {
    return false;
  }
  let substring = isSubstring(string1, string2)
  if (!substring) {
      return false
  }
  for (let i=0; i< string1.length; i++) {
      let permutation = string1.slice(i) + string1.slice(0,i)
      if (permutation === string2) {
          return true
      }
  }
  return false
};



console.log(checkRotation("waterbottle", "erbottlewat"))
console.log(checkRotation("bottle", "ottleb"))
console.log(checkRotation("waterbottle", "erbottlewats"))
console.log(checkRotation("watersbottle", "ercbottlewat"))