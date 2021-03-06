let currentInfoWindow;
//make an object of all my info
const daysEventsObject = {
	Thursday: [{
		event:'Mehendi',
		time:'5:30pm - 7:30pm',
		address:'Silver Creek Valley Country Club, 5460 Country Club Pkwy, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text: 'This event is catered to all the lovely ladies who would like to get their hands decorated with henna. There will likely be a dosa bar. <br> Can\'t make this event? Don\'t fret, we will have a henna artist available at the reception.'
	}],
	Friday: [{	
		event:'Making of Bride and Groom',
		time:'10:00am',
		address:'4955 Portmarnoch Ct, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text:'Event for immediate family, you\'ll know if you need to be there'
	},
	{
		event:'Sangeet & Reception',
		time:'6:30pm',
		address:'Silver Creek Valley Country Club, 5460 Country Club Pkwy, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text: 'Event for all, combination of the Sangeet and a reception'
	}],
	Saturday: [{
		event:'Informal Family Gathering',
		time:'7:00pm',
		address:'Yosemite Lodge at the Falls, Yosemite Valley, CA, United States',
		// link: 'https://youtu.be/K3AQ8U2wqYc',
		text: 'This optional event will be the time for family to mingle outside of the wedding ceremonies in an informal setting. There will be snacks and drinks.'
	},
	{
		event:'Dinner with Friends',
		time:'7:30pm',
		address:'Yosemite Lodge at the Falls, Yosemite Valley, CA, United States',
		// link: '',
		text: 'This optional event will be the time for family to mingle outside of the wedding ceremonies in an informal setting. There will be snacks and drinks.'
	}],
	Sunday: [{
		event:'Ceremony & Lunch',
		time:'10:00am',
		address:'The Majestic Yosemite Hotel, Yosemite Valley, CA 95389',
		link: '',
		text: 'Following the ceremony, there will be a lunch reception. This gives us the opportunity to relax and spend time with our guests after the ceremony.'
	}]}

// I think I can do a initMap for each day set up listeners on the days 
// then have them call a function for each day
function initMap(centerpoint) {
	let center = '';
	let zoomMove;
	if(centerpoint) {
		center = centerpoint;
		zoomMove=12;
	}
	else {
		center = '37.642950, -120.996035';
		zoomMove=1;
	}
	center = center.split(',');//splits the string of cords around the , and stores in an array
	const map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoomMove,
      center: {lat: parseFloat(center[0]), lng: parseFloat(center[1])}
    });
    //this adds the draggable directions api
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true,
        map: map,
        panel: document.getElementById('right-panel')
    });
    directionsDisplay.addListener('directions_changed', function() {
        computeTotalDistance(directionsDisplay.getDirections());
    });
    displayRoute('San Jsoe International Airport, CA', 'The Majestic Yosemite, CA', directionsService, directionsDisplay);   

//this calls the info box
	const infowindowMehendi = new google.maps.InfoWindow({
		content: contentStringMehendi
  });

	const infowindowSangeet = new google.maps.InfoWindow({
		content: contentStringSangeet
  });
        
  const infoWindowMakingOfBride = new google.maps.InfoWindow({
    content: contentStringMakingBride
  });
  
  const infoWindowYosemiteRC = new google.maps.InfoWindow({
    content: contentStringYosemiteRC
  });

  const infoWindowMajestic = new google.maps.InfoWindow({
    content: contentStringMajestic
  });

  const silverCreekCC = new google.maps.Marker({
      position: {lat: 37.276759, lng: -121.771754},
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 6
      },
      draggable: false, 
      map: map,
      title:'Mehendi'
    });

	const SangeetAtSilverCreek = new google.maps.Marker({
      position: {lat: 37.276947, lng: -121.767684},
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 6
      },
      draggable: false, 
      map: map,
      title:'Sangeet & Reception'
    });

  const prHome = new google.maps.Marker({
    	position: {lat: 37.284095, lng:-121.780559},
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 6
      },
      draggable: false, 
      map: map,
    	title: 'Making of Bride & Groom'
    });
  const yosemiteLodge = new google.maps.Marker({
      position: {lat: 37.743468, lng: -119.598263},
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 6
      },
      draggable: false, 
      map: map,
      title:'Informal Family Gathering at the Yosemite Lodge'
    });
  const majesticHotel = new google.maps.Marker({
    	position: {lat: 37.746286, lng:-119.574262},
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
        scale: 6
      },
      draggable: false, 
      map: map,
    	title: 'Ceremony & Lunch at The Majestic Yosemite Hotel'
    });

//closes window popup now
    silverCreekCC.addListener('click', function() {
      closeCurrentInfoWindow();
      
    	infowindowMehendi.open(map, silverCreekCC);
    	currentInfoWindow = infowindowMehendi;
    });

    SangeetAtSilverCreek.addListener('click', function() {
      closeCurrentInfoWindow();
      
    	infowindowSangeet.open(map, SangeetAtSilverCreek);
    	currentInfoWindow = infowindowSangeet;
    });
    
    prHome.addListener('click', function() {
      closeCurrentInfoWindow();
      
    	infoWindowMakingOfBride.open(map, prHome);
    	currentInfoWindow = infoWindowMakingOfBride;
    });

    yosemiteLodge.addListener('click', function() {
      closeCurrentInfoWindow();
      
    	infoWindowYosemiteRC.open(map, yosemiteLodge);
    	currentInfoWindow = infoWindowYosemiteRC;
    });

    majesticHotel.addListener('click', function() {
      closeCurrentInfoWindow();
      
    	infoWindowMajestic.open(map, majesticHotel);
    	currentInfoWindow = infoWindowMajestic;
    });
}
//to display the route
function displayRoute(origin, destination, service, display) {
  service.route({
      origin: origin,
      destination: destination,
      waypoints: [{
          location: 'Silver Creek Valley Country Club, CA'
           }],
      travelMode: 'DRIVING',
      avoidTolls: true
  }, function(response, status) {
      if (status == 'OK') {
          display.setDirections(response);
      } else {
          alert('Could not display directions due to: ' + status);
      }
  });
}

function computeTotalDistance(result) {
  let total = 0;
  const myroute = result.routes[0];
  for (let i =0; i < myroute.legs.length; i++) {
      total +=  myroute.legs[i].distance.value;
  }
  total = total / 5280;
  
  document.getElementById('total').innerHTML = total.toFixed(1) + ' mi';
}

function closeCurrentInfoWindow() {
  if (currentInfoWindow) {
    currentInfoWindow.close();
  }
}
function hide(id){
  document.getElementById("weatherBox").style.display = "none";
  document.getElementById("infoText").style.display = "none";

}
//this function will call the id of the day, on click
//it will need to clear the container
//and call function of constants for the day's events
function listOfEventsByDay() {
	$('button').click(function(e) {
		const centerpoint = $(this).attr('data-centerpoint');
    initMap(centerpoint);
    document.getElementById("map-directions").style.display = "none";
    document.getElementById("infoText").style.display = "inline";
    document.getElementById("weatherBox").style.display = "inline";
		$('button').removeClass('activeButton');
		$(e.target).addClass('activeButton');
		$('.days-stuff').empty();
		daysEventsObject[e.target.id].forEach(function(arg) {
			$('.days-stuff').append(`\
			<h4 class='boldTheHeader'>${arg.event}, ${arg.time}</h4>
			<p>${arg.address}</p>
			<p>${arg.text}</p>
			`)
		})

	}) 
}

//weather addition
$(document).ready(function(){
  $('#Thursday, #Friday, #Saturday, #Sunday').click(function(e){ //e is the data from the html element, the id in this case, and we specify centerpoint to split it up
      const centerpoint = $(this).attr('data-centerpoint');//this is grabbing the latlong in data-centerpoint="37.276759, -121.771754" from HTML
      const latLon = centerpoint.split(',');//this is splitting the string around the comma and storing in an array
      //we need parsfloat to put it into a number and latlon[] to call the number at the 0 position and at the 1 position
      const locationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${parseFloat(latLon[0])}&lon=${parseFloat(latLon[1])}&units=imperial&APPID=fe9cc2f3597bc0da6d52789f4517a6b8`
      $.ajax({
        url:locationUrl,
        type:"GET",
        dataType:"jsonp",
        success: function (data){
          // console.log(data);
            const widget = displayWeather(data);
            $("#weatherBox").html(widget);
        }
      }); 
  });
});


function displayWeather(data) {
  // console.log(data);
  return "<h4 >Temperature: "+ data.main.temp + " F</h4>" +
          "<h4 >Weather: " + data.weather[0].description + "</h4>" +
          "<img style='display:none' alt='wether-icon' id='weatherIcon' src='http://openweathermap.org/img/w/" + data.weather[0].icon +".png'> </img>";
}

const contentStringMehendi = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Mehendi</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Mehendi</b>, or <b>Hennna</b>, is a form of body art'+
        ' from Ancient India, in which decorative designs are created'+
        ' on a person\'s body, using a paste, created from the powdered'+
        ' dry leaves of the henna plant (Lawsonia inermis). Ancient in'+
        ' origin, mehndi is still a popular form of body art among the'+
        ' women of the Indian Subcontinent, Africa and the Middle East.</p>'+
        '<a class="lightbox" href="https://youtu.be/K3AQ8U2wqYc">'+
        'A quick video about Mehendi</a></p>'+
        '</div>'+
        '</div>';

const contentStringSangeet = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Sangeet</h1>'+
        '<div id="bodyContent">'+
        '<p>The <b>Sangeet</b> ceremony heightens the excitement of wedding'+
        ' festivities. In the earlier days the custom used to last for ten'+
        ' days but with the passage of time, the custom has usually reduced'+
        ' to a one night function. Traditionally held at the bride\'s home,'+
        ' women relatives and friends play the dholki and sing suhaag, which'+
        ' is a traditional folk song. Songs include \'jokes\' about the'+
        ' in-laws, would be husband, how to have a successful marriage, and'+
        ' songs about the bride leaving her parents home. Similarly, the women'+
        ' at the groom\'s home sing songs called ghoriya. Traditionally only'+
        ' the women celebrated this ceremony but nowadays the concept has'+
        ' changed as both men and women participate to celebrate this occasion.</p>'
        '</div>'+
        '</div>';
        
const contentStringMakingBride = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Making of Bride and Groom</h1>'+
        '<div id="bodyContent">'+
        '<p>The <b>Haldi</b> ceremony is traditionally held at the bride and grooms\''+
        ' respective houses, there is a gathering of all the relatives and well'+
        ' wishers. They then smear them with turmeric paste – Nalugu. It is a'+
        ' mixture of flours, turmeric powder and oils. This is done to cleanse the' +
        ' skin, so that a natural glow is there. This is where the actual ceremony' +
        ' starts. It is believed that once the haldi ceremony takes place, the' +
        ' bride and groom are not allowed to step outside till their wedding.</p>';
        '</div>'+
        '</div>';
        
const contentStringYosemiteRC = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Rock Climbing in Yosemite</h1>'+
        '<div id="bodyContent">'+
        '<p>Yosemite is one of the world\'s greatest climbing areas. Climbers here'+
        ' can enjoy an endless variety of challenges--from the sustained crack'+
        ' climbs of the Merced River Canyon to pinching crystals on sun-drenched'+
        ' Tuolumne Meadows domes to multi-day aid climbs on the big walls of the'+
        ' Valley. Yosemite is not just a climber\'s playground, however: its walls'+
        ' and crags are an integral part of a larger ecosystem, protected as' +
        ' Wilderness, which was set aside for people to enjoy in a natural state' +
        ' for generations to come.</p>';
        '</div>'+
        '</div>';
        
const contentStringMajestic = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Wedding at the Majestic</h1>'+
        '<div id="bodyContent">'+
        '<p>The Majestic, formerlly the Ahwahnee, is a grand hotel on the floor of' +
        ' the Yosemite Valley. Opened in 1927 it is a premiere example of National'+
        ' Park Service rustic architecture and was declared a National Historic '+
        ' Landmark in 1987. Fun facat: the interiors of the Ahwahnee Hotel were'+
        ' adapted for Stanley Kubrick\'s horror film The Shining.</p>';
        '</div>'+
        '</div>';


$(listOfEventsByDay);
$(hide);
