"use strict";

function getTopSalary(obj) {
  var topSalary = 0, 
      name = null;

  for (var person in obj) {
    if (obj[person] > topSalary) {
      topSalary = obj[person];
      name = person;
    }
  }

  return topSalary ? name : 'No people found';
}

var salaries = {
  pavel: 500,
  noah: 550,
  mike: 449,
};

console.log(getTopSalary(salaries));