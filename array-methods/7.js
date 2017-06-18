// Случайный порядок в массиве

function randomize(a, b) {
  return Math.random() >= 0.5 ? 1 : -1;
}

var arr = [1, 2, 3, 4, 5];

arr.sort(randomize);

console.log(arr);