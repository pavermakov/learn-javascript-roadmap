// Фильтрация через функцию 

var arr = [1, 2, 3, 4, 5, 6, 7];

function filter(arr, func){
  return arr.filter(func);
}

function isBetween(start, end) {
  return function(elem) {
    return elem > start && elem < end;
  }
}

function inArray(checkArray) {
  return function(elem) {
    return checkArray.indexOf(elem) !== -1;
  }
}

console.log(filter(arr, isBetween(3, 7)));
console.log(filter(arr, inArray([2, 5, 13])));