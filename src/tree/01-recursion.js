// recursion function
function fibonaci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  return fibonaci(n - 2) + fibonaci(n - 1);
}
// using loop
function fibonaciV2(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let pre = 0;
  let curr = 1;
  let next = 1;
  let i = 2;
  while (i <= n) {
    next = pre + curr;
    i++;
    pre = curr;
    curr = next;
  }
  return next;
}
console.log(fibonaciV2(6));
