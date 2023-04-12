function bubbleSort(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let i = numberList.length - 1; i > 0; i--) {
    for (j = 0; j < i; j++) {
      if (numberList[j] > numberList[j + 1]) {
        const temp = numberList[j];
        numberList[j] = numberList[j + 1];
        numberList[j + 1] = temp;
      }
    }
  }

  console.log(numberList);
  return numberList;
}
bubbleSort([1]);
bubbleSort([2, 1, 3]);
bubbleSort([2, 3, 1, 4, 2, 6]);
