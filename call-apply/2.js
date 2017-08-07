// Примените функцию к аргументам

function applyAll() {
  var func = arguments[0];
  var args = [].slice.call(arguments, 1);

  return func.apply(null, args);
}

function sum() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

console.log(applyAll(sum, 2, 7, 9));