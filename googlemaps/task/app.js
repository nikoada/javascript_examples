var locaArr = {};

var map;
var zoom = 7;
function initMap(){
  let startPosition = { lat: -34.397, lng: 150.644 };
  map = new google.maps.Map(document.getElementById('map'),
  { center: startPosition, zoom: zoom });

//   var geocoder = new google.maps.Geocoder();
//   // if(!location){
//   //   location = 'New York, USA';
//   // }
// for(var i = 0; i < locaArr.length; i++ ){
//
//   geocoder.geocode({'address' : locaArr[i]},
//     function(results, status){
//       if(status == google.maps.GeocoderStatus.OK){
//         let lat = results[0].geometry.location.lat();
//         let lng = results[0].geometry.location.lng();
//         var marker = new google.maps.Marker({
//           position: {
//             lat: lat,
//             lng: lng
//           },
//           map: map,
//           title: locaArr[i]
//         });
//
//         map.setCenter({lat: lat, lng: lng});
//       }
//
//     });
//     };
    // setTimeout(function(){
    //   map.setCenter({lat: 22.000, lng: 35.000});
    //   map.setZoom(5);
    // }, 5000);
    // map.setZoom(zoom)
}


$('.addBtn').click(function(){

  var locName = $('input').val();
  var geocoder = new google.maps.Geocoder();

  geocoder.geocode({'address' : locName},
    function(results, status){
      if(status == google.maps.GeocoderStatus.OK){
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
        alert('Invalid entry!')
      }
    });
    $('input').val('');
});

$('.zoomOutBtn').click(function(){
  map.setZoom(zoom-=1)
});

$('.remove').click(function(){
  locaArr[$("#select option:selected").val()].setMap(null);
  delete locaArr[$("#select option:selected").val()];
  $("#select option:selected").remove();
  $('input').val('');

});


// to do list:
//
// move map where dropdown is selected!
//
// prevent double enties!
