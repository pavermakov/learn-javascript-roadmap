function getDecimal(n) {
  return +("0." + ("" + n).split('.').pop());
}

console.log(getDecimal(0), typeof getDecimal(12.2));