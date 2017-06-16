function ucFirst(str) {
  if (typeof str !== 'string' || !str.length) return;

 return str[0].toUpperCase() + str.slice(1);
}

console.log(ucFirst(' '));