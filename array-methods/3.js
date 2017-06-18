// Функция removeClass

function removeClass(obj, cls) {
  var classList = obj.className.split(' ');

  while (classList.indexOf(cls) !== -1) {
    classList.splice(classList.indexOf(cls), 1);
  }

  obj.className = classList.join(' ');

  return obj;
}

var obj = {
  className: 'open menu menu',
};

console.log(removeClass(obj, 'menu'));