// Добавить get/set-свойства

function User(fullName) {
  this.fullName = fullName;

  Object.defineProperties(this, {
    firstName: {
      get: function() {
        return this.fullName.split(' ')[0];
      },
      set: function(value) {
        var arr = this.fullName.split(' ');
        arr[0] = value;
        this.fullName = arr.join(' ');
      },
    },
    lastName: {
      get: function() {
        return this.fullName.split(' ')[1];
      },
      set: function(value) {
        var arr = this.fullName.split(' ');
        arr[1] = value;
        this.fullName = arr.join(' ');
      },
    }
  });
}

var vasya = new User("Василий Попкин");
console.log(vasya.firstName, vasya.lastName);

vasya.firstName = 'Douglas';
vasya.lastName = 'Sheppard';
console.log(vasya.firstName, vasya.lastName);