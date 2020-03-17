/*
Is Unique: Implemet an algorith to determine if a string has all unique characters. 
What if you cannot use additional data structures?
*/

const isUnique = inputString => {
  let charBool = new Array(128).fill(false);
  for (let i = 0; i < inputString.length; i++) {
    if (charBool[inputString.charCodeAt(i)] === true) {
      return false;
    } else {
      charBool[inputString.charCodeAt(i)] = true;
    }
  }
  return true;
};

const test = () => {
  results = [];
  expectedResults = [false, true, false, true, false];
  let strings = [
    "Hi There",
    "Try One",
    "This one definitely shouldn't pass",
    "alskituemcn,x?][",
    "fffffffff"
  ];
  strings.forEach(string => {
    results.push(isUnique(string));
  });
  let failCount = 0;
  for (let i = 0; i < results.length; i++) {
    console.log(
      `Test ${i + 1} Expected: ${expectedResults[i]}, Result: ${results[i]}`
    );
    if (expectedResults[i] != results[i]) {
      failCount += 1;
    }
  }
  console.log(
    `Conducted ${results.length} tests. Passed ${results.length -
      failCount} tests.  Failed ${failCount} tests.`
  );
};
test();
