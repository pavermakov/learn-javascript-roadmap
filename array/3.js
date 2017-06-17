// Решето Эратосфена

function getPrimeNumbers(n) {
  // Создать список последовательных чисел от 2 до n: 2, 3, 4, ..., n
  var list = createArray(2, n, 1);
  var primeList = [];
  var i = null;

  for (i = 0; i < list.length; i += 1) {
    if (isPrime(list[i])) {
      primeList.push(list[i]);
    }
  }

  return primeList;
}

function isPrime(num) {
  var i = null;

  for (i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function createArray(start, end, step) {
  var arr = [];
  var i = null;

  for (i = start; i <= end; i += step) {
    arr.push(i);
  }

  return arr;
}

function findSum(arr) {
  var sum = 0;
  var i = null;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

var sumPrimeNumbers = findSum(getPrimeNumbers(100));

console.log(sumPrimeNumbers);
