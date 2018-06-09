for (var i1 = 0; i1 < 10; i1++) { // block scope
  console.log(i1);
}

console.log(i1);

function counter() { // function scope
  for (var i2 = 0; i2 < 5; i2++) { // block scope
    console.log(i2);
  }
}

counter();
// console.log( 'i2 after the loop: ' + i2 );

// conditional block

if (true) {
  var i3 = 2;
}

console.log( i3 );

// anonymous block

{
  var i4 = 3;
}
 console.log( i4 );

 {
   let i5 = 4;
 }

//console.log.(i5);

if (true) {
  let i6 = 8;
}

for (let i7 = 0; i7 < 5; i7++) {
  console.log(i7);
}

//console.log(i7);

var i8a = 10; // 1. assoghment
i8a = 15;     // 2. reassignment
console.log(i8b);

var i8b = 10; // 1. assoghment
i8b = 15;     // 2. reassignment
console.log(i8b);

const i8c = 10; // 1. assoghment
//i8c = 15;     // 2. reassignment not allowed
console.log(i8c);


{
  const i10 = -5;
}

//console.log(i10);
