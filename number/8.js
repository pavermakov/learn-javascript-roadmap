function getRandom(min, max) {
  return min + Math.random() * (max - min);
}

console.log(getRandom(8, 12))