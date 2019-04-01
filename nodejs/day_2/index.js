let fs = require('fs');

fs.readFile('C:/dev/advent-of-code/nodejs/input_data/day_2.txt', 'utf8', function(err, contents) {
    if (err) console.log(err.message);
    getChecksum(contents);
});

function getChecksum(input) {
  let strings = input.split('\n');
  let doubles = 0;
  let triplets = 0;
  
  strings.forEach(string => {
    let charArr = getUniqueCharactersInString(string);
    
    let doublesArr = [];
    let tripletsArr = [];
    charArr.forEach(char => {
      findDoublesAndTriplets(string, char, doublesArr, tripletsArr);
    });
    
    if (doublesArr.length > 0 && tripletsArr.length > 0 && doublesArr.length === tripletsArr.length) {
      doubles++;
      triplets++;
    } else if (doublesArr.length > 0 && tripletsArr.length < 1) {
      doubles++;
    } else if (doublesArr.length < 1 && tripletsArr.length > 0) {
      triplets++;
    }
  });
  console.log('Doubles: %d, Triplets: %d, Doubles * Triplets: %d', doubles, triplets, (doubles * triplets));
}

function getUniqueCharactersInString(string) {
  let charArr = [];
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if (!charArr.includes(char)) charArr.push(char);
  }
  return charArr;
}

function findDoublesAndTriplets(string, char, doublesArr, tripletsArr) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (char === string.charAt(i)) count++;
  }
  if (count === 2) {
    doublesArr.push(char);
  }
  if (count === 3) {
    tripletsArr.push(char);
  }
}

function findStringsWhichDifferByOneChar(first, second) {
  // TODO compare if strings differ by only one and same index
  if (true) {
    let firstChars = convertStringToCharArr(first);
    let secondChar = convertStringToCharArr(second);

  }
}

function convertStringToCharArr(string) {
  let charArr = [];
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    charArr.push(char);
  }
  return charArr;
}