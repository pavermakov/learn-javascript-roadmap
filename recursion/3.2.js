function fib(n) {
  var a = 1, b = 1, c, i;

  for (i = 3; i <= n; i += 1) {
    c = a + b;
    a = b;
    b = c;
  }

  return b;
}

console.log(fib(7));