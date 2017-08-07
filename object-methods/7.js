// Создайте калькулятор

var calculator = {
  val1: null,
  val2: null,
  read: function() {
    this.val1 = prompt('Введите первое значение');
    this.val2 = prompt('Введите второе значение');
  },
  sum: function() {
    if (this.val1 && this.val2) {
      return parseFloat(this.val1) + parseFloat(this.val2);
    }
  },
  mul: function() {
    if (this.val1 && this.val2) {
      return this.val1 * this.val2;
    }
  },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );