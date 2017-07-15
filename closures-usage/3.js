// Строковый буфер с очисткой

// Функция - строковый буфер

function makeBuffer() {
  var text = '';

  function buffer(value) {
    if (arguments.length) {
      text += value;
    } else {
      return text;
    }
  }

  buffer.clear = function() {
    text = '';
  }

  return buffer;
}

var buffer = makeBuffer();

buffer("Тест");
buffer(" тебя не съест ");

console.log(buffer());

buffer.clear();

console.log(buffer());