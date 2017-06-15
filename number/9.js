function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}

console.log(randomInteger(2, 10));