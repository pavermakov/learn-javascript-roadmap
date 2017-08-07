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

  this.addMethod = function(name, fn) {
    methods[name] = fn;
  }
}

var calc = new Calculator();

calc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});

console.log(calc.calculate('7 ** 2'));