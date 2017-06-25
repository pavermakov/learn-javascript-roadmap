// Перепишите цикл через map

var arr = ["Есть", "жизнь", "на", "Марсе"];

var sizes = arr.map(function(item, i, arr) {
  return item.length;
});

console.log(sizes);