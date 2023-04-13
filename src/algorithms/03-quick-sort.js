function parition(numberList, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  let i = left;
  let j = right;

  const mid = left + Math.trunc((right - left) / 2);
  const pivot = numberList[mid];
  while (i <= j) {
    while (numberList[i] < pivot) i++;
    while (numberList[j] > pivot) j--;

    if (i < j) {
      let temp = numberList[i];
      numberList[i] = numberList[j];
      numberList[j] = temp;
    }
    if (i <= j) {
      i++;
      j--;
    }
  }
  return i;
}
function quickSort(numberList, left, right) {
  if (left >= right) return numberList;
  const pivotPostion = parition(numberList, left, right);
  quickSort(numberList, left, pivotPostion - 1);
  quickSort(numberList, pivotPostion, right);

  return numberList;
}
console.log(quickSort([8, 7, 2, 1, 6, 4, 5], 0, 6));
