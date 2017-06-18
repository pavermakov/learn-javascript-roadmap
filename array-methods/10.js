// Отфильтровать анаграммы

function aclean(arr) {
  var newArr = [];
  var obj = toObj(arr);

  for (prop in obj) {
    newArr.push(obj[prop]);
  }

  return newArr;
}

function toObj(arr) {
  var obj = {};
  var sorted, i = null;

  for (i = 0; i < arr.length; i += 1) {
    sorted = arr[i].toLowerCase()
                        .split('')
                        .sort()
                        .join('');

    obj[sorted] = arr[i];
  }

  return obj;
}

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log(aclean(arr));