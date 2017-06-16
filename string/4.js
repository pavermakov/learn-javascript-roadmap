function getPrice(str) {
  return +str.slice(1);
}

console.log(getPrice('$300'));