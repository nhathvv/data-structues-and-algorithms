// linear search
function linearSearch(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([0, 1, 2, 3, 4, 5], 6)); // -1
console.log(linearSearch([0, 1, 2, 3, 4, 5], 5));
console.log(linearSearch([0, 1, 2, 3, 4, 5], 2));
console.log(linearSearch([0, 1, 2, 3, 4, 5], 3));
// binary search using recursion
function binarySearch(numberList, target, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  if (right < left) return -1;
  const mid = left + Math.trunc((right - left) / 2);
  if (numberList[mid] === target) return mid;
  if (target > numberList[mid]) {
    return binarySearch(numberList, target, mid + 1, right);
  }
  return binarySearch(numberList, target, left, mid - 1);
}
let numberList = [0, 1, 2, 3, 4, 5];
let left = 0;
let right = numberList.length;
console.log(binarySearch(numberList, 6, left, right)); // -1
console.log(binarySearch(numberList, 5, left, right)); // 5
console.log(binarySearch(numberList, 2, left, right)); // 2
console.log(binarySearch(numberList, 3, left, right)); // 3

// non-recursion
function binarySearchV1(numberList, target) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;
  let left = 0;
  let right = numberList.length - 1;
  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === target) return mid;
    if (numberList[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearchV1([0, 1, 2, 3, 4, 5], 6)); // -1
console.log(binarySearchV1([0, 1, 2, 3, 4, 5], 5));
console.log(binarySearchV1([0, 1, 2, 3, 4, 5], 2));
console.log(binarySearchV1([0, 1, 2, 3, 4, 5], 3));
