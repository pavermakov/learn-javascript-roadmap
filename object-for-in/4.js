"use strict";

function multiplyNumeric(obj) {
  for (var prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 2;
    }
  }

  return obj;
}

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));