// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// }
//
// var jane = {
//   name: 'Jane',
//   yearOfBirth: 1991,
//   job: 'marketing'
// }
//
// var mark = {
//   name: 'Mark',
//   yearOfBirth: 1948,
//   job: 'taxidriver'
// }

// function person(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
//
//   //this.calculateAge();
// }
//
// person.prototype.calculateAge = function() {
//   return 2018 - this.yearOfBirth;
// }
//
// person.prototype.lastName = 'Smith';
//
//
// var sandra = new person('Sandra', 1995, 'waitress');
// var mark = new person('Mark', 1948, 'raxidriver');
// var jane = new person('Jane', 1991, 'marketing');
// var john = new person('John', 1990, 'teacher');
//
// function Item (name, price) {
//   this.name = name;
//   this.price = price;
//   this.sold = false;
// }

// var personProto = {
//   calculateAge: function() {
//     return 2018 - this.yearOfBirth;
//   }
//
//   sayMyName: function() {
//     console.log('My name is ' + this.name);
//   }
// }
//
// var julia = Object.create( personProto );
// julia.yearOfBirth = 1991;
// julia.job = 'teacher';


// var alfred = {
//   name: 'Alfred',
//   sayYourName: function() { console.log(this.myName); },
//
//   setLastName: function(lastname) { this.lastname = lastname; }
// }
//
// var gonzo = {
//   myName: 'Gonzo'
// }
//
//
// alfred.sayYourName.call(gonzo);
// alfred.setLastName.call(gonzo, 'gonzales');
//
// var john = {
//   name: 'john',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style, timeOfDay) {
//     if(style === 'formal') {
//       console.log('Good ' + timeOfDay
//         + ' Ladies and Gentlemen I am '
//         + this.name + ', I am a '
//         + this.job + ' and I am '
//         + this.age + ' years old.');
//     }
//     else if(style === 'friendly') {
//       console.log('Hey whatsup. I am '
//         + this.name + ', I am a '
//         + this.job + ' and I am '
//         + this.age + ' years old. Have a nice ' + timeOfDay);
//     }
//   }
// };
//
// john.presentation('formal', 'morning');
//
// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };
//
// john.presentation.call(emily,'friendly', 'evening');
// john.presentation.apply(emily, ['friendly', 'evening']);
//
//
// // PARENT
// function Item( name, price ) {
//   this.name = name;
//   this.price = price;
//   this.sold = false;
// }
// Item.prototype.sell = function() {
//   this.sold = true;
// }
//
// // CHILDREN
// function Book( name, price, author ) {
//   Item.call(this, name, price);
//   this.author = author;
//   this.category = 'book';
// }
// Book.prototype = Object.create(Item.prototype);
//
// function Movie( name, price, director ) {
//   Item.call(this, name, price);
//   this.director = director;
//   this.category = 'movie';
// }
//
// Movie.prototype = Object.create(Item.prototype);
//
// var Casino = new Movie('Casino', 10, 'Martin Scorsese');
//
// Book.prototype = Object.create(Item.prototype);
// var It = new Book('IT', 25, 'Stephen King');
//
// Casino.sell();
// It.sell();
//
// function ComicBook(name, production, minage=6) {
//   Book.call(this, name, author);
//   if (this.minAge < 6){
//     this.minAge = 6;
//   }
//   else {
//     this.minAge = minage;
//   }
// }
// var JessicaJones = new ComicBook('Jessica Jones', 'Marvel', 12);
// JessicaJones.prototype = Object.create(Item.prototype);
//
//
// JessicaJones.sell();

// es5

// function Person5(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person5.prototype.calculateAge = function() {
//   var age = new Date().getFullYear() - this.yearOfBirth;
//   console.log(age);
// }
//
// var john5 = new Person5('John', 1990, 'teacher');
//
// // es6
//
// class Person6 {
//   constructor(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//   }
//   calculateAge() {
//     var age = new Date().getFullYear() - this.yearOfBirth;
//     console.log(age);
//   }
// }
//
// var john6 = new Person6('John', 1990, 'teacher');
//
// function Athlet5(name, yearOfBirth, job, olympicGames, medals) {
//   Person5.call(this, name, yearOfBirth, job);
//   this.olympicGames = olympicGames;
//   this.medals = medals;
// }
//
// Athlet5.prototype = Object.create(Person5.prototype);
// Athlet5.prototype.wonMedal = function() {
//   this.medals++;
//   console.log(this.medals);
// }
//
// var johnAthlet5 = new Athlet5('John', 1990, 'Swimmer', 3, 10);
//
// johnAthlet5.calculateAge();
// johnAthlet5.wonMedal();
//
//
// class Athlete6 extends Person6 {
//   constructor(name, yearOfBirth, job, olympicGames, medals) {
//     super(name, yearOfBirth, job);
//     this.olympicGames = olympicGames;
//     this.medals = medals;
//   }
//
//   wonMedal() {
//     this.medals++;
//     console.log(this.medals);
//   }
// }
//
// var johnAthlete6 = new Athlete6('John', 1990, 'Swimmer', 3, 10);
// johnAthlete6.calculateAge();
// johnAthlete6.wonMedal();
//

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.sold = false;
  }
  sell() {
    this.sold = true;
  }
}

class Book extends Item {
  constructor(name, price, author) {
    super(name,price);
    this.author = author;
    this.category = 'book';
  }
}

class Movie extends Item {
  constructor(name, price, director) {
    super(name, price);
    this.director = director;
    this.category = 'movie';
  }
}

var Casino = new Movie('Casino', 10, 'Martin Scorsese');


Casino.sell();

class ComicBook extends Book {
  constructor(name, price, minage = 6) {
    super(name, price);
    if (minage < 0) {
      this.minAge = 6;
    }
    else {
      this.minAge = minage;
    }
  }
}

var JessicaJones = new ComicBook('Jessica Jones', 25, 'Marvel');
JessicaJones.sell();
