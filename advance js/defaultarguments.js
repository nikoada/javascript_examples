function multiply(a, b = 1) {
    return a*b;
}

console.log(multiply(5, 2));

function myMultiply(a, b) {
  if (!b) {
    b = 1;
  }
  return a*b;
}

myMultiply(5);
