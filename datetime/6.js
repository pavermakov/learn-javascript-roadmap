// Сколько секунд уже прошло сегодня?

 function getSecondsToday() {
   var now = Date.now();
   var start = new Date(now).setHours(0, 0, 0, 0);

   return (now - start) / 1000;
 }

 console.log(getSecondsToday());