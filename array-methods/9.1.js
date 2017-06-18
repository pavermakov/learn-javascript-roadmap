// Вывести односвязный список при помощи цикла.

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printList(list) {
  var nextItem = list;
  var i = 1;

  while (nextItem) {
    console.log(i + '. ', nextItem);

    i += 1;
    nextItem = nextItem.next;
  }
}

printList(list);
