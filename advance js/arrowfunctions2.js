//sayHelloExpression(); // this will not be an error

//function statement
function sayHelloStatement() {
  console.log('hello from function statement');
}

//sayHelloStatement(); // wiil be an arror because of hoisting

//function expression
var sayHelloExpression = function() { // will be executed rightaway
  console.log('hello from function expression')
}

sayHelloExpression();


var multiply1 = (a, b) => { return a*b}; // imperative
console.log(multiply1(2, 7));

var multiply2 = (a, b) => a * b; // functional
console.log(multiply2(2, 7));

// task

var intro = (name, age) => 'My name is ' + name + ' and I am ' + age + 'years old';

var doubleArr = arr => arr.map(el => 2*el);

var person = {
  age: 30,
  name: 'max',
  intro () { console.log('My name is ' + this.name + ' and I am ' + this.age + ' years old')}
}

person.intro();

var box5 = {
  coolor: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', function() {
      var str = 'This is box number ' + this.position + ' and the color is ' + this.color;
      alert(str);
    });
  }
}

box5.clickMe();

var box6 = {
  color: 'green',
  position: 1,
  clickMe: function() {
    document.querySelector('.green').addEventListener('click', () => {
      var str = 'This is box number ' + this.position + ' and the color is ' + this.color;
      alert(str);
    });
  },
  foo1: () => {
    alert('My position is ' + this.position);
    //this.position is undefines beacause
    // 'this' will reference to window object
  },
  foo2() {
    var x = () => {
      console.log('parent scope this.position = ' + this.position);
    }
    x();
  }
}


box6.clickMe()
box6.foo2();
//box6.foo1();
