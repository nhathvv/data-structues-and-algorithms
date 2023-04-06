function uniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const uniqueNumberSet = new Set(numberList);
  return [...uniqueNumberSet];
}

function uniqueLetter(str) {
  if (str.length === 0) return "";
  const uniqueLetterSet = new Set(str);
  return [...uniqueLetterSet].join("");
}

function getIntersectionSet(set1, set2) {
  const intersectionSet = new Set();
  for (const value of set1) {
    if (set2.has(value)) intersectionSet.add(value);
  }
  return intersectionSet;
}
const set1 = new Set([1, 2, 3]);
const set2 = new Set([1]);

console.log(getIntersectionSet(set1, set2));

function getUniqueWords(sentence) {
  // your code here ...
  const words = new Set();
  let currentWord = "";
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char === " ") {
      if (currentWord !== "") {
        words.add(currentWord);
      }
      currentWord = "";
    } else {
      currentWord += char;
    }
  }
  if (currentWord !== "") {
    words.add(currentWord);
  }
  return Array.from(words);
}

const PIN_LENGTH = 6;
function isValidPIN(pin) {
  // your code here ...
  console.log(pin.toString());
  if (pin.toString().length !== 6) {
    return false;
  }
  if (typeof pin !== "number") {
    return false;
  }

  for (let i = 1; i < pin.toString().length; i++) {
    if (pin[i] < pin[i - 1] || pin[i] > pin[i - 1]) {
      return false;
    }
  }
  const splitPin = pin.toString().split("");
  const obj = {};
  for (let i = 0; i < splitPin.length; i++) {
    const number = Number.parseInt(splitPin[i]);
    obj[number] = obj[number] === undefined ? 1 : obj[number] + 1;
  }
  for (const key in obj) {
    if (obj[key] > 2) {
      console.log(obj[key]);
      return false;
    }
  }
  return true;
}
console.log(isValidPIN(226699));
