var adultsObj = document.querySelector('.add-adults');
var kidsObj = document.querySelector('.add-kids');
var startTourObj = document.querySelector('.add-start-tour');
var endTourObj = document.querySelector('.add-end-tour');
var acomodationObj = document.querySelector('.add-acomodation');
var mealObj = document.querySelector('.add-meal');
var outputObj = document.querySelector('.output');

var prices = {
  adult: 40,
  kid: 30
}

// adultsObj.addEventListener('change', updateUI);
// kidsObj.addEventListener('change', updateUI);
// startTourObj.addEventListener('change', updateUI);
// endTourObj.addEventListener('change', updateUI);
// acomodationObj.addEventListener('change', updateUI);
// mealObj.addEventListener('change', updateUI);

function onChange(objParam) {
  objParam.addEventListener('change', updateUI);
}

onChange(adultsObj);
onChange(kidsObj);
onChange(startTourObj);
onChange(endTourObj);
onChange(acomodationObj);
onChange(mealObj);

function updateUI() {
  var result = 0;
  result += (+ Number(startTourObj.value) + Number(endTourObj.value) + Number(acomodationObj.value)
  + Number(mealObj.value) + prices.adult) * adultsObj.value
  + (Number(startTourObj.value)/2 + Number(endTourObj.value)/2
  + Number(acomodationObj.value)/2 + Number(mealObj.value)/2 + prices.kid) * kidsObj.value;
  outputObj.innerHTML = result;
}

updateUI();
