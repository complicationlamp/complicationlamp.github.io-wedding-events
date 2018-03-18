

// I think I can do a initMap for each day set up listeners on the days 
// then have them call a function for each day
function initMap() {
	var uluru = {lat: 37.276759, lng: -121.771754};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
}

