function truncate(str, maxLength) {
  if (str.length > maxLength) {
    return str.substr(0, maxLength - 3) + '...';
  }

  return str;
}

console.log(truncate('Feel my heat, taking you higher, burn with me, heaven is on fire!', 25));