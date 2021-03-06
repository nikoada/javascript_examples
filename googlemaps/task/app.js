var locaArr = {};

var map;
var zoom = 7;
function initMap(){
  let startPosition = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById('map'),
  { center: startPosition, zoom: zoom });
}


$('.addBtn').click(function(){

  var locName = $('input').val();
  var geocoder = new google.maps.Geocoder();
  var doubleEntry = false;

  $.each(locaArr, function(key, value) {
    if (key.toLowerCase() === locName.toLowerCase()){
      doubleEntry = true;
    };
  });

  geocoder.geocode({'address' : locName},
    function(results, status){
      if(status == google.maps.GeocoderStatus.OK && !doubleEntry){
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        var marker = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: map,
          title: locName
        });

        map.setCenter({lat: lat, lng: lng});

        // locaArr.push($('input').val());
        locaArr[locName] = marker ;
        $('#select').prepend("<option>"+ locName + "</option>")
        $("#select").val(locName)
      }
      else {
        alert('Invalid or double entry!')
      }
    });
    $('input').val('');
});

$('.zoomInBtn').click(function(){
  zoom = map.zoom;
  map.setZoom(zoom+=1)
});

$('.zoomOutBtn').click(function(){
  zoom = map.zoom;
  map.setZoom(zoom-=1)
});

$('.remove').click(function(){
  if (Object.keys(locaArr).length > 0){

    locaArr[$("#select option:selected").val()].setMap(null);
    delete locaArr[$("#select option:selected").val()];
    $("#select option:selected").remove();
    $('input').val('');

    centerMap();

  }

});

$('select').change(function() {
    centerMap();
});

function centerMap(){
  map.setCenter(locaArr[$("#select option:selected").val()].position);
};


// to do list:
//
// move map where dropdown is selected!
//
// prevent double entries!
//
// get actual zoom value
