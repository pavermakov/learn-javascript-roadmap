// Функция - строковый буфер

function makeBuffer() {
  var buffer = '';

  return function(value) {
    if (arguments.length) {
      buffer += value;
    } else {
      return buffer;
    }
  }
}

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());