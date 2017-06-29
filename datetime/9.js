// Относительное форматирование даты

function printDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear() % 100;
  var hour = date.getHours();
  var min = date.getMinutes();

  day = day < 10 ? '0' + day : '' + day;
  month = month < 10 ? '0' + month : '' + month;
  year = year < 10 ? '0' + year : '' + year;
  hour = hour < 10 ? '0' + hour : '' + hour;
  min = min < 10 ? '0' + min : '' + min;

  return day + '.' + month + '.' + year + ' ' + hour + ':' + min;
}

function formatDate(date) {
  var diff = new Date() - date;

  if(diff < 1000) {
    dateString = 'только что';
  } else if (diff < 1000 * 60) {
    dateString = Math.round((diff) / 1000) + ' секунд назад';
  } else if (diff < 1000 * 60 * 60) {
    dateString = Math.round((diff) / 1000 / 60) + ' минут назад';
  } else {
    dateString = printDate(date);
  }

  return dateString;
}

console.log( formatDate(new Date(new Date - 1)) ); // "только что"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) );

