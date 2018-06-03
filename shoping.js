var myBody = document.getElementsByTagName('body')[0];
var myP = document.getElementById('display');
var myInput = document.createElement('input');
var myAddBtn = document.createElement('button');
var removeFirstBtn = document.createElement('button');
var removeLastBtn = document.createElement('button');
var myFinalPrice = document.createElement('button');
var removeBtn = document.createElement('button');
var myUl = document.createElement('ul');
var myLiArray = document.getElementsByTagName('li');
var myNewArray = [];
var myNewObj = {name: "", price: 0};

myBody.appendChild(myP).innerHTML = 0;
myBody.appendChild(myInput);
myBody.appendChild(myAddBtn);
myBody.appendChild(removeFirstBtn);
myBody.appendChild(removeLastBtn);
myBody.appendChild(removeBtn);
//myBody.appendChild(myFinalPrice);
myBody.appendChild(myUl);


myAddBtn.innerHTML = 'Add item to a list';
removeFirstBtn.innerHTML = 'Remove first item';
removeLastBtn.innerHTML = 'Remove last item';
removeBtn.innerHTML = 'Remove item';
myFinalPrice.innerHTML = 'Sum';

myInput.addEventListener("keyup", function(event){
  event.preventDefault();
  if (event.keyCode === 13) {
    myAddBtn.click();
  }
});

myAddBtn.onclick = function () {
  if (myInput.value.length > 2) {
  myUl.appendChild(document.createElement('li')).innerHTML = myInput.value;
  var randomnumber = 5 + Math.floor(Math.random() * 95);
  //myNewObj.name = myInput.value;
  //myNewObj.price = Math.floor((Math.random() * 10) + 5);
  myNewArray.push({name: myInput.value, price: randomnumber});
  myInput.value = '';
  //console.log(myNewObj);
  calculate();
}
else {
  alert('Please write something to add');
}
}

removeFirstBtn.onclick = function () {
  if (myUl.hasChildNodes()) {
    myUl.removeChild(myUl.firstChild);
    myNewArray.pop();
    calculate();
  }
  else {
    alert('basket is empty');
  }
}

removeLastBtn.onclick = function () {
  if (myUl.hasChildNodes()) {
    myUl.removeChild(myUl.lastChild);
    myNewArray.shift();
    calculate();
  }
  else {
  alert('basket is empty');
  }
}

removeBtn.onclick = function() {
  if ( myInput.value.length == 0) {
    alert('Please write item name to remove from a basket');
    return;
  }
  for (var i = myNewArray.length -1; i > -1; i--) {
    var flag = true;
    if (myNewArray[i].name.toLowerCase() == myInput.value.toLowerCase()) {
      myNewArray.splice(i, 1)
      myUl.removeChild(myUl.childNodes[i]);
      flag = false;
    }
  }
  if (flag) { alert('can not find')}
  calculate();
  myInput.value = '';
}

myFinalPrice.onclick = function () {
  calculate();
}

function calculate() {
  var priceSum = 0;
if (myNewArray.length > 0) {
  priceSum = 0;

  for (var i = 0; i < myNewArray.length; i++) {
    priceSum += myNewArray[i].price;
  }

  myP.innerHTML = "sum of item prices is " + priceSum + "€";
}
else {
myP.innerHTML = 0;
alert('basket is empty');
}
}
