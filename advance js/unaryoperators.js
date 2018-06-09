var x0 = +3;
var x1 = +'3';
var x2 = +'-3';
var x3 = +'3.14';
var x4 = +true;
var x5 = +false;

var x14 = !false;
var x15 = !NaN;
var x16 = !undefined;
var x17 = !"";
var x18 = !0;
var x19 = !-3;


var a = 4;
var b = a++;
console.log(b, a);

var x = 4;
var y = ++x;
console.log(y);

var obj2 = {
  x1: typeof 2,
  x2: typeof -3.14,
  x3: typeof 0xFF,
  x4: typeof true,
  x5: typeof false,
  x6: typeof null,
  x7: typeof Infinity,
  x8: typeof [1,2,3],
  x9: typeof {a:1, b:2},
  x10: typeof function() {},
  x11: typeof 'Hello',
  x12: typeof { function () {} }
};

for (var key in obj2) { console.log(key + ' = ' + obj2[key]); }

var hi = 'hi';
delete hi;

function yo() {}
delete yo;

var pub = {bar: 1};
delete pub;

var code = [1,2,3,4];
delete code;

var fruits = {abc: 'apple', def: 'mango'};
delete fruits['abc'];
