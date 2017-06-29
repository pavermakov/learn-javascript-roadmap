// Вывести дату в формате дд.мм.гг

function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear() % 100;

  day = day < 10 ? '0' + day : '' + day;
  month = month < 10 ? '0' + month : '' + month;
  year = year < 10 ? '0' + year : '' + year;

  return day + '.' + month + '.' + year;
}

var d = new Date(2001, 0, 2);
console.log(formatDate(d));