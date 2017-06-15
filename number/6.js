function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;

  return Math.pow(phi, n) / Math.sqrt(5);
}

console.log(fibBinet(77));