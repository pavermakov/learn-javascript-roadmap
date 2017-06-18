// Фильтрация массива "на месте"

function filterRangeInPlace(arr, a, b) {
  for (var i = 0; i < arr.length; i += 1) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
}

var arr = [5, 3, 8, 1, 2, 4, 9];

filterRangeInPlace(arr, 1, 3)

console.log(arr);
