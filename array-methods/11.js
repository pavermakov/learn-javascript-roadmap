// Оставить уникальные элементы массива

function unique(arr) {
  var obj = {};
  var newArr = [];
  var i = null;

  for (i = 0; i < arr.length; i += 1) {
    if (!(arr[i] in obj)) {
      obj[arr[i]] = true;
      newArr.push(arr[i]);
    } 
  }

  return newArr;
}

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log(unique(strings));