// Армия функций

function makeArmy() {

  var shooters = [];

  for (var i = 0; i < 10; i++) {
    var shooter = (function() { 
      var index = i
      return function() {
        console.log(index);
      }
    })();

    shooters.push(shooter);
  }

  return shooters;
}

var army = makeArmy();

army[0]();
army[5]();