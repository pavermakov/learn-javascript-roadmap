// Сумма произвольного количества скобок
function sum() {
  var total = 0;

  function func(n) {
    total += n;
    return func;
  };;

  func.toString = function() {
    return total;
  }

  return func;
};

alert(sum(1)(2));