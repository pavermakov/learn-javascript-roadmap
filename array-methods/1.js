// Добавить класс в строку

function addClass(obj, cls) {
  var classList = obj.className.split(' ');

  if (classList.indexOf(cls) === -1) {
    classList.push(cls);
    obj.className = classList.join(' ');
  }

  return obj;
}

var obj = {
  className: 'open myMenu',
};

console.log(addClass(obj, 'extended'));
console.log(addClass(obj, 'open'));
console.log(addClass(obj, 'menu'));