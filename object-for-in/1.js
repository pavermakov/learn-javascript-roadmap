function isEmpty(obj) {
  var counter = 0;

  for (prop in obj) {
    counter += 1;
  }

  return !counter;
}

var player1 = {};
var player2 = {
  score: 100,
};

console.log('Player1', isEmpty(player1));
console.log('Player2', isEmpty(player2));