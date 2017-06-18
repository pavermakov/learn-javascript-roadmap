// Сортировать в обратном порядке

function sortDecrementally(a, b) {
  return a > b;
}

var arr = [5, 2, 1, -10, 8];

arr.sort(sortDecrementally);

console.log(arr);