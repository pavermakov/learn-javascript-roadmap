// Сортировка объектов

function sortAscending(a, b) {
  return a.age - b.age;
}

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(sortAscending);

console.log(people);