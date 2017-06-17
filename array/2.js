// Фильтр диапазона

function filterRange(arr, start, end) {
  if (start > end || start < 0 || end > arr.length - 1) {
    return 'Error: Incorrect range!';
  }

  var newArr = [];
  var i = null;

  for (var i = start; i <= end; i += 1) {
    newArr.push(arr[i]);
  }

  return newArr;
}

var colors = ['red', 'yellow', 'pink', 'white', 'brown', 'black'];

console.log(filterRange(colors, 2, 5));