
var map;
var zoom = 7;
var gotObj;

function initMap(){

  let startPosition = { lat: 52.52000659999999, lng: 13.404953999999975 };
  map = new google.maps.Map(document.getElementById('map'),
  { center: startPosition, zoom: zoom });
}


$('.addBtn').click(function(){

  var locName = $('input').val();
  var geocoder = new google.maps.Geocoder();
  var doubleEntry = false;

  $.each(gotObj, function(index, value) {
    if (gotObj[index].title.toLowerCase() == locName.toLowerCase()){
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

        $('#select').prepend("<option>"+ locName + "</option>")
        $("#select").val(locName)

				postLoc(lat,lng,locName);
        gotObj.push({
          lat: lat,
          lng: lng,
          title: locName
        })
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
  if (Object.keys(gotObj).length > 0){

    $.each(gotObj, function(index, value){
      if (gotObj[index].title === $("#select option:selected").val())

    })
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

  $.each(gotObj, function(index, value){
    if (gotObj[index].title == $("#select option:selected").val()){
      map.setCenter({lat: gotObj[index].lat, lng: gotObj[index].lng});
    }
  })

  // map.setCenter(locaArr[$("#select option:selected").val()].position);
};

function postLoc(lat, lng, locName){
	$.ajax({
        url: 'http://localhost:3000/location',
        type: 'POST',
        data: JSON.stringify(
            {
                lat: lat,
                lng : lng,
                title: locName,
            }
        ),
        dataType: 'json',
        contentType: 'application/json',
        success: function(response) {
            console.log('response ' + response);
        },
        error: function(xhr, status, error) {
            console.log(`
                error: ${error},
                status: ${status},
                xhr: ${JSON.stringify(xhr)}
            `);
        }
    });
}

// $(document).ready(function(){

	function getLoc(){


		$.ajax({
	            url: 'http://localhost:3000/location',
	            type: 'GET',
	            dataType: 'json',
	            success: function(response) {
	                console.log(response);
									gotObj = response.locations;
	                }
	            });

	}



  function putLoc(){
		$.each(gotObj, function(index, value){
			$.each(gotObj[index], function(key, value){
				var marker = new google.maps.Marker({
					position: {
						lat: gotObj[index].lat,
						lng: gotObj[index].lng
					},
					map: map,
					title: gotObj[index].title
				});

			})
			$('#select').prepend("<option>"+ gotObj[index].title + "</option>")
		})

	}

    getLoc();

  // });








// to do list:
//
// move map where dropdown is selected!
//
// prevent double entries!
//
// get actual zoom value
