// Последний день месяца?

function getLastDayOfMonth(year, month) {
  var d = new Date(year, month + 1, 0);

  return d.getDate();
}

console.log(getLastDayOfMonth(2012, 1));