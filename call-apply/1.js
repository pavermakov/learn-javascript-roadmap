// Перепишите суммирование аргументов

function sumArgs() {
  return [].reduce.call(arguments, function(sum, val) {
    return sum + val;
  });
}

console.log( sumArgs(1, 2, 3) ); 