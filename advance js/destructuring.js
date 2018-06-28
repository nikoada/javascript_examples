//destructuring

var john = ['John', 30];
var name1 = john[0];
var age1 = john[1];

const [name2, age2] = ['John', 30];
console.log(name2);
console.log(age2);

const obj = {
  firstName: 'John',
  lastName: 'Smith'
};

var firstName1 = obj.firstName;
var lastName1 = obj.lastName;

const {firstName, lastName} = obj;
console.log(firstName, lastName);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 67 - age];
}

let [age, retirement] = calcAgeRetirement(1985);
console.log(age);
console.log(retirement);


var tree = {
  numLeafs: 66,
  height: 25,
  color: 'saladGreen'
}

const {numLeafs, height, color} = tree;
console.log(height)

var treeArr  = [66, 25, 'saladGreen'];

const[numLeafs1, height1, color1] = treeArr;
console.log(color1);
