// День недели в европейской нумерации

function getLocalDay(date) {
  var d = date.getDay();

  return d === 0 ? 7 : d + 1;
}

var date = new Date(2012, 0, 0);

console.log(getLocalDay(date));