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

// class Item {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//     this.sold = false;
//   }
//   sell() {
//     this.sold = true;
//   }
// }
//
// class Book extends Item {
//   constructor(name, price, author) {
//     super(name,price);
//     this.author = author;
//     this.category = 'book';
//   }
// }
//
// class Movie extends Item {
//   constructor(name, price, director) {
//     super(name, price);
//     this.director = director;
//     this.category = 'movie';
//   }
// }
//
// var Casino = new Movie('Casino', 10, 'Martin Scorsese');
//
//
// Casino.sell();
//
// class ComicBook extends Book {
//   constructor(name, price, minage = 6) {
//     super(name, price);
//     if (minage < 0) {
//       this.minAge = 6;
//     }
//     else {
//       this.minAge = minage;
//     }
//   }
// }
//
// var JessicaJones = new ComicBook('Jessica Jones', 25, 'Marvel');
// JessicaJones.sell();


// var age = 27;
//
// var obj = {
//   name: 'Joao',
//   city: 'Lisbon'
// };
//
// function change(a, b) {
//   a = 30;
//   b.city = 'Berlin';
// }
//
// change(age, obj);
//
// console.log(age);
// console.log(obj.city);
//
// //////////////Passing function as arguments///////
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i = 0; i < arr.length; i++) {
//     arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// ////calculate the min
//
// function calculateAge(e1) {
//   return 2018 - e1;
// }
//
// function isFullAge(e1) {
//   return e1 >= 18;
// }
//
// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
//
// console.log(ages);
// console.log(fullAges);
//
//
// //////////// Functions returning functions /////////////
//
// function interviewQuestion(job) {
//   if(job=='designer') {
//   return function(name) {
//     console.log(name + ', can you please explain what UX Design is?');
//     }
//   }
//   else if(job == 'teacher') {
//     return function(name) {
//       console.log('What subject do you teach, ' + name + '?');
//     }
//   }
//   else {
//     return function(name) {
//       console.log('Hello ' + name);
//   }
// }
//
// }
//
// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// teacherQuestion('John');
// designerQuestion('John');
// designerQuestion('Jane');
// teacherQuestion('Mark');
// designerQuestion('Mike');
//
//
// //imp
// console.log('=====');
// interviewQuestion('teacher')('Mark');
//
// ///////// Task ///////////////
// var exam = 'hello world';
//
// function LetterCapitalize(str) {
//   var res = str;
//   res = res.replace(res[0], res[0].toUpperCase());
//   for(var i = 0; i < res.length; i++) {
//     if(res[i] == ' '){
//       res = res.replace(res[i+1], res[i+1].toUpperCase());
//     }
//   }
//   console.log(res);
// }
//
// LetterCapitalize('hello world of imagination!');
//
// function capilize(str, fn) {
//   return fn(str);
// }
//
// capilize(exam, LetterCapitalize);
//
//
// function fnInFn(param) {
//
//   if (param === 'capitalize') {
//     return function LetterCapitalize(str) {
//       var res = str;
//       res = res.replace(res[0], res[0].toUpperCase());
//       for(var i = 0; i < res.length; i++) {
//         if(res[i] == ' '){
//           res = res.replace(res[i+1], res[i+1].toUpperCase());
//         }
//       }
//       console.log(res);
//       return res;
//     }
//   }
// }
//
// var sentence = fnInFn('capitalize');
// sentence('hello world');
//
//
// function primeNum(range, fn) {
//   var arrPrime = [];
//   for (var i = 2; i < range; i++) {
//     if(!fn(i)){
//       continue;
//     }
//     else {
//       arrPrime.push(i);
//     }
//   }
//   return arrPrime;
// }
//
// function isPrime(n) {
//   for (let i = 2, i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
//
// console.log(primeNum(20));

function reverseString(str) {
  return str.split("").reverse().join("");
}

function upsideDown(str, fn) {
  return fn(str);
}

console.log(upsideDown('Hello world!', reverseString));



function calculateFactorial(param) {
  var res = 1;
  var dis = param + "!=";

  function calculator(n) {
    for (var i = n; i >= 1; i--) {
      res *= i;
      dis += i + "*";
    }
    dis += "=" + res;
    console.log(dis);
    return res;
  }
  return calculator(param);

}


console.log(calculateFactorial(5));


////////////////////////////
// iife

function game() {
  var score = Math.round()*19;
  console.log(score >= 5);
}
game();

(function() {
  var score = Math.round()*19;
  console.log(score >= 5);
})();

(function(goodluck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodluck);
})();


////////////////////
// Closures

function retirement(retirementAge) {
  var a = ' years left until retirement';
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log((retirementAge-age) + a);
  }
}

var retirementUS = retirement(66);
retirementUS(1990);

// global scope, inner scope etc

topping = "anchovi";

function pizzaParty(numSlices) {
  var topping = "pepperoni";

  innerFunction = function() {

  }
  console.log("...But put " + topping + " on " + numSlices + "slices");
}

console.log("This pizza is all about the " + topping);

//innerFunction();

////////////////////////
// Rest Parameters/Operator

function isFullAge5(arguments) {
  //
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2018-cur) >= 18);
  });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

function isFullAge6(...years) {
  console.log(years);
  //years.forEach(cur => console.log((2018-cur) >= 18));
  for(year in years) {
    console.log("year =>" + years[year]);
  }
}

isFullAge6(1990, 1999, 1965, 2016, 1987);


//////////////////////////
// Spread Operator

function addFourAges(a,b,c,d) {
  return a+b+c+d;
}
// case1
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//case2
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// case3
const sum3 = addFourAges(...ages);
console.log(sum3);

// case4
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);


////////////////////////////////////
// Drfault parameters
// function checkDefault(data) {
//   console.log("checkDefault");
//   console.log(data[0]);
// }
//
// checkDefault();

function checkDefault(data=['test']) {
  console.log("checkDefault");
  console.log(data[0]);
}

checkDefault();


function personInfo(firstName, yearOfBirth, lastName='Smith', nationality='american') {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;

  var fullInfo = this.firstName + ' ' + this.lastName + ' year of Birth ' + this.
}
