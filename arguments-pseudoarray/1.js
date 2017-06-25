// Проверка на аргумент-undefined

function f(x) {
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
  if (arguments.length > 0) {
    if (typeof arguments[0] === 'undefined') {
      return 1;
    }
  }

  return 0;
}

console.log(f(undefined));
console.log(f());