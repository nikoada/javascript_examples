var usdObj = document.getElementById('usd');
var eurObj = document.getElementById('eur');




function loadPrice(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD,EUR&e=Coinbase&extraParams=your_app_name');
  xhr.onload = function() {
    if(xhr.status === 200) {
    console.log('data has arrives' + xhr.responseText);
    var obj = JSON.parse(xhr.responseText);
    console.log(obj);
    usdObj.innerHTML = 'USD: ' + obj.USD;
    eurObj.innerHTML = 'EUR: ' + obj.EUR;
  }
  }
  xhr.send();
}

loadPrice();
