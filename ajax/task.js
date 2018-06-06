var tableBody = document.getElementsByTagName('tbody')[0];
//var tr = tableBody.appendChild(document.createElement('tr'));

function creatTable() {
  //console.log('in')
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://35.156.88.18:3050/users');
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('success, status code is 200');

      var data = xhr.responseText;
      var dataObj = JSON.parse(data);

      console.log(data);
      console.log(dataObj);
    }


    for (var i = 0; i < Object.keys(dataObj).length; i++) {
      var tr = document.createElement('tr');
      tr.appendChild(document.createElement('td')).innerHTML = dataObj[i].name;
      tr.appendChild(document.createElement('td')).innerHTML = dataObj[i].username;
      tr.appendChild(document.createElement('td')).innerHTML = dataObj[i].email;
      tr.appendChild(document.createElement('td')).innerHTML = dataObj[i]._id;
      tableBody.appendChild(tr);
    }


}
xhr.send();
}

creatTable();
