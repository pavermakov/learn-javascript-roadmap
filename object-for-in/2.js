"use strict";

function addAll(obj) {
  var sum = 0;

  for (var player in obj) {
    sum += obj[player];
  }

  return sum;
}

var scores = {
  pavel: 115,
  noah: 124,
  kassidy: 119,
  jen: 120,
  abby: 122,
};

console.log(addAll(scores));