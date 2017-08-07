// Создать Calculator при помощи конструктора

function Calculator() {
  var total = 0;

  this.firstVal = null;
  this.secondVal = null;

  this.read = function() {
    this.firstVal = +prompt('Введите первое число: ', 0);
    this.secondVal = +prompt('Введите второе число: ', 0);
  }

  this.sum = function() {
    return this.firstVal + this.secondVal;
  }

  this.mul = function() {
    return this.firstVal * this.secondVal;
  }
}

var calc = new Calculator();

calc.read();
alert(calc.sum());
alert(calc.mul());