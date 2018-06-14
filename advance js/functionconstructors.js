var john = {
  name: 'John',
  yearOfBirth: 1990,
  job: 'teacher'
}

var jane = {
  name: 'Jane',
  yearOfBirth: 1991,
  job: 'marketing'
}

var mark = {
  name: 'Mark',
  yearOfBirth: 1948,
  job: 'taxidriver'
}

function person(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  this.calculateAge();
}

person.prototype.calculateAge = function() {
  this.age = (2018 - this.yearOfBirth);
}



var sandra = new person('Sandra', 1995, 'waitress');
var mark = new person('Mark', 1948, 'raxidriver');
var jane = new person('Jane', 1991, 'marketing');
var john = new person('John', 1990, 'teacher');

function Item (name, price) {
  this.name = name;
  this.price = price;
  this.sold = false;
}
