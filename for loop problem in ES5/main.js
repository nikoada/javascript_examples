//ES5
for (var i = 0; i < 10; i++) {
  setTimeout( function() { console.log(i); }, 1000 );
}

//solved in ES6
for (let i = 0; i < 10; i++) {
  setTimeout( () => console.log(i), 1000 );
}
