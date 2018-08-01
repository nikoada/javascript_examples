var map, newMarker;
function initMap(location, zoom=7){
  let startPosition = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Mamarker2p(document.getElementById('map'),
  { center: startPosition, zoom: zoom });

  var geocoder = new googlmarker2e.maps.Geocoder();
  if(!location){
    location = 'New York, USA';
  }

  geocoder.geocode({'address' : location},
    function(results, status){
      if(status == google.maps.GeocoderStatus.OK){
        let lat = results[0].geometry.location.lat();
        let lng = results[0].geometry.location.lng();
        newMarker = new google.maps.Marker({
          position: {
            lat: lat,
            lng: lng
          },
          map: map,
          title: location
        });

        map.setCenter({lat: lat, lng: lng});
      }
      else {
        alert('Invalid location');
      }

    });
    // setTimeout(function(){
    //   map.setCenter({lat: 22.000, lng: 35.000});
    //   map.setZoom(5);
    // }, 5000);
    map.setZoom(zoom)
}

var newLocation = '';
var newZoom = 7;

$('.searchBtn').click(function(){
  newZoom = 7;
  newLocation = $('input').val();
  initMap(newLocation);
});

$('.zoomOutBtn').click(function(){
  initMap(newLocation, newZoom -= 1);
});

$('.remove').click(function(){
  newMarker.setMap(null);
});
