// Перевести текст вида border-left-width в borderLeftWidth

function camelize(str) {
  var subStrList = str.split('-');
  var i = null;

  for (i = 1; i < subStrList.length; i += 1) {
    subStrList[i] = subStrList[i].charAt(0).toUpperCase() + subStrList[i].slice(1); 
  }

  return subStrList.join('');
}

console.log(camelize('border-left-width'));