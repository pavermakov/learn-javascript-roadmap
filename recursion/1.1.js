function sumTo(n) {
  var sum = 0;

  while(n > 0) {
    sum += n;
    n -= 1;
  }

  return sum;
}

console.log(sumTo(100));