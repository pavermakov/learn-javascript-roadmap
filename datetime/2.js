// Имя дня недели
function getWeekDay(date) {
  var day = '';

  switch(date.getDay()) {
    case 0:
      day = 'вс';
      break;
    case 1:
      day = 'пн';
      break;
    case 2:
      day = 'вт';
      break;
    case 3:
      day = 'ср';
      break;
    case 4:
      day = 'чт';
      break;
    case 5:
      day = 'пт';
      break;
    case 6:
      day = 'сб';
      break;
  }

  return day;
}

var date = new Date(2012, 0, 3);

console.log(getWeekDay(date));