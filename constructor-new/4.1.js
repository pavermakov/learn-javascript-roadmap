// Создайте калькулятор

function Calculator() {
  var methods = {
    '+': function(a, b) {
      return a + b;
    },
    '-': function(a, b) {
      return a - b;
    },
  };

  this.calculate = function(str) {
    var arr = str.split(' ');
    var val1 = +arr[0];
    var val2 = +arr[2];
    var operator = arr[1];

    return methods[operator](val1, val2);
  }
}

var calc = new Calculator();
console.log(calc.calculate('5 + 3'));