var btnGET = document.querySelector('.get-ping');
var btnPOST = document.querySelector('.post-ping');
var username = document.getElementById('username');
var password = document.getElementById('password');
var logIn = document.getElementById('logIn');

/*
btnGET.onclick = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://cileria.com:3050/ping');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('success, status code is 200');

      var data = xhr.responseText;
      var dataObj = JSON.parse(data);

      console.log(data);
      console.log(dataObj);
    }
  }

  xhr.send();
}

btnPOST.onclick = function() {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://cileria.com:3050/ping');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('success, status code is 200');

      var data = xhr.responseText;
      var dataObj = JSON.parse(data);

      console.log(data);
      console.log(dataObj);
    }
  }
  var body = {
    message: 'hallo world',
    weather: 'not so hot today'
  }

  xhr.send(JSON.stringify(body));
}
*/
logIn.onclick = function () {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://cileria.com:3050/fakelogin');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('success, status code is 200');

      var data = xhr.responseText;
      var dataObj = JSON.parse(data);

      console.log(data);
      console.log(dataObj);

      if (dataObj.error === 'username and password not found') {
        alert('incorect login');
      }
    }
  }
  var body = {
    username: username.value,
    password: password.value
  }

  xhr.send(JSON.stringify(body));
}
