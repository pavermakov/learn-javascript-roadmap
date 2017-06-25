// Массив частичных сумм

function getSums(arr) {
  var result = [];

  if (!arr.length) return result;

  var totalSum = arr.reduce(function(prevValue, currentItem, i, arr) {
    result.push(prevValue);
    return prevValue + currentItem;
  });

  result.push(totalSum);

  return result;
}

var nums = [1, 2, 3, 4, 5];

console.log(getSums(nums));

