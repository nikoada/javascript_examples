var inputObj = document.getElementById('inputId');
var saveObj = document.getElementById('saveId');
var getObj = document.getElementById('getId');
var removeObj = document.getElementById('removeId');
var olObj = document.getElementById('olId');


if (localStorage.getItem('li0') == undefined) {
  console.log('li0 = 0 now')
  localStorage.setItem('li0', 0);
}

saveObj.onclick = function() {
  if (inputObj.value) {
    var liObj = document.createElement('li');
    localStorage.setItem('li' + (Number(localStorage.getItem('li0')) + 1), inputObj.value);
    localStorage.setItem('li0', Number(localStorage.getItem('li0')) + 1);
    console.log('New item N: ' + localStorage.getItem('li0') + ' added');
    olObj.appendChild(liObj).innerHTML = localStorage.getItem('li0') + '.  ' + inputObj.value;
    inputObj.value = '';
  }
  else {
    console.log('Please enter a name of item');
    alert('Please enter a name of item');
  }
}

getObj.onclick = function() {
  while (olObj.hasChildNodes()) {
    olObj.removeChild(olObj.firstChild);
  }

  var li0Obj = localStorage.getItem('li0');
  for (var i = 0; i < Number(li0Obj); i++) {
    olObj.appendChild(document.createElement('li')).innerHTML = (i + 1) + '.  ' + localStorage.getItem('li' + (i + 1));
  }
  console.log(i);
}

removeObj.onclick = function() {
  while (olObj.hasChildNodes()) {
    olObj.removeChild(olObj.firstChild);
  }

  localStorage.clear();
}
