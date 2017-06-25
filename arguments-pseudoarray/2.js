// Сумма аргументов

function sum() {
  if (arguments.length === 0) return 0;
  
  arguments.reduce = Array.prototype.reduce;

  return arguments.reduce(function(sum, value){
    return sum + value;
  });
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum());