function binarySearch(studentList, searchName) {
  if (typeof searchName === undefined || typeof studentList === undefined)
    return -1;
  if (!Array.isArray(studentList) || studentList.length === 0) return -1;
  if (searchName.length === 0 || !searchName.trim()) return -1;

  let left = studentList[0].id - 1;
  let right = studentList[studentList.length - 1].id - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (
      studentList[mid].name.trim().toLowerCase() ===
      searchName.trim().toLowerCase()
    )
      return mid;
    if (
      studentList[mid].name.trim().toLowerCase() >
      searchName.trim().toLowerCase()
    ) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}
const studentList = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob Tan" },
  { id: 3, name: " John " },
];
console.log(binarySearch(studentList, "john"));
