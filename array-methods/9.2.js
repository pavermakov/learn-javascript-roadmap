// Вывести односвязный список при помощи рекурсии.

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

  if (nextItem.next) {
    console.log(nextItem);
    printList(nextItem.next);
  }

  
}

printList(list);