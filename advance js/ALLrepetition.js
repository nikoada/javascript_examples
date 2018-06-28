///////////////////
//// calsses

// class ITGuy {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// class QualityAssurance extends ITGuy {
//   constructor (name, age, skills) {
//     super (name, age);
//     this.skills = skills;
//   }
//   checking() {
//     console.log("I'm checking!")
//   }
// }
//
// class ProjectManager extends ITGuy {
//   constructor (name, age, skills, room) {
//     super(name, age);
//     this.skills = skills;
//     this.room = room;
//   }
//
//   managing() {
//     console.log("I'm managing stuff");
//   }
// }
//
// var jan = new Developer("jan", 32, ["javaScript", "HTML", "CSS", "NodeJS"], "foobaroo");
//
// var ashok = new Developer('ashok', 32, ['javascript', 'HTML', 'CSS', 'NodeJS'], 'ashok');
//
// var johannes = new ProjectManager('johannes', 32, 5000, [jan, ashok]);


///////////////////////
////Functions as arguments

// var years = [ 1990, 1965, 1937, 2005, 1998 ];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for (var i = 0; i < arr.length; i++) {
//     arrRes.push( fn(arr[i]) );
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2018 - el;
// }
//
// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
//
// //task
//
// function maxHeartRate(age) {
//   var rate = 0;
//   if(age >= 18 && age <= 81) {
//     rate = 206.9 - (0.67 * age);
//   } else {
//     alert('Persons age is not in range of calculation!')
//   }
//   return rate;
// }
//
// var maxRate = arrayCalc(ages, maxHeartRate);
// console.log(maxRate);


///////////////////////////
//// Returning Functions

// function interviewQuestion(job) {
//   if (job === 'designer') {
//     return function() {
//       console.log('What is UX?');
//     }
//   }
//   else if (job === 'teacher') {
//     return function() {
//       console.log('What subject to you teach?');
//     }
//   } else {
//     return function() {
//       console.log('So what do you do?')
//     }
//   }
// }
//
// function sayHello() {
//   return function() {
//     console.log('Hello');
//   }
// }
//
// sayHello()();

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
//
// /////////////////////////
// ////Closures
//
// function retirement(retirement) {
//   var a = 'years left until retirement';
//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1985);

///////////////////////////////
//// Tricky task

// function inc() {
//   var counter = 0;
//   return function() {
//     return counter++;
//   }
// }
//
// var countFun = inc();
//

////////////////////////
////IIFE

// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score + goodLuck >= 5);
// })(2);
//

// var sendrequestsyncObj = document.getElementById('sendrequest');
// var sendrequestasyncObj = document.getElementById('sendrequestasync');
// var alertsomethingObj = document.getElementById('alertsomething');
// var data = null;
//
// sendrequestsyncObj.onclick = function() {
//   var request = new XMLHttpRequest();
//   request.open('GET', 'http://cileria.com:30505/longrequest', false); // false makes the request synchronous
//   request.send(null);
//   console.log('data: ' + request.responseText);
//   if(request === 200) {
//     console.log(request.responseText);
//   }
// }
//
// sendrequestasyncObj.onclick = function() {
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://cileria.com:30505/longrequest');
//   xhr.onload = function() {
//     if(xhr.status === 200) {
//       console.log('success, status code is 200');
//
//       var data = xhr.responseText;
//       var dataObj = JSON.parse(data);
//
//       console.log(data);
//       console.log(dataObj);
//     }
//   }
//   xhr.send();
// }
//
// alertsomething.onclick = function() {
//   console.log('do something');
// }


//Spread

function addFourAges(a,b,c,d) {
  return a+b+c+d;
}

var sum = addFourAges(18, 30, 12, 21);
console.log(sum);

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
// apply is the same as call with arraay as parameter list
console.log(sum2);

// es6
var sum3 = addFourAges(...ages);
console.log(sum3);



const familySmith = ['john', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

//Rest operator

function isFullAge5() {
  console.log(arguments);  // exits in each js functions
  // converting from array-like object to real array
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.forEach(function(cur) {
    console.log((2018 - cur) >= 18);
  });
}

isFullAge5(1990, 2002, 1965);

function isFullAge6(...years) {
  console.log(years);
  years.forEach(cur => (2018 - cur) >= 18);
}

isFullAge6(1990, 2002, 1965);

function isFullAge6b(limit, ...years) { // rest of the parameters
  console.log(years);
  years.forEach(cur => console.log((2018 - cur) >= 18));
}

isFullAge6b(21, 1990, 1999, 1965);
