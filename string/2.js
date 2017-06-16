function checkSpam(str) {
  str = str.toLowerCase();

  if (str.indexOf('xxx') > -1 || str.indexOf('viagra') > -1) {
    return 'has spam';
  }

  return 'no spam!';
}

console.log(checkSpam('buy xxxxxxxxxxxxxxxx now'));