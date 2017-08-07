// Создать Accumulator при помощи конструктора

function Accumulator(val) {
  this.value = val || 0;

  this.read = function() {
    this.value += +prompt('Введите значение', 0);
  }
}

var acc = new Accumulator(2);
acc.read();
acc.read();
alert(acc.value);