// Фильтрация через функцию 

var arr = [1, 2, 3, 4, 5, 6, 7];

function isEven(elem) {
  return elem % 2 === 0;
}

function filter(arr, func){
  return arr.filter(func);
}

console.log(filter(arr, isEven));