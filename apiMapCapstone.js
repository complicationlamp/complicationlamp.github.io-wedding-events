
//make an object of all my info
const daysEventsObject = {
	Thursday: [{
		event:'Mehendi',
		time:'5:30pm - 7:30pm',
		address:'Silver Creek Valley Country Club, 5460 Country Club Pkwy, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text: 'This event is catered to all the lovely ladies who would like to get their hands decorated with henna. There will likely be a dosa bar. Can\'t make this event? Don\'t fret, we will have a henna artist available at the reception.'
	}],
	Friday: [{	
		event:'Making of Bride and Groom',
		time:'10:00am',
		address:'4955 Portmarnoch Ct, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text:'Event for imidiate family, you\'ll know if you need to be there'
	},
	{
		event:'Sangeeth & Reception',
		time:'6:30pm',
		address:'Silver Creek Valley Country Club, 5460 Country Club Pkwy, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text: 'Event for all, combination of the Sangeeth and a reception'
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
		zoomMove=10;
	}
	else {
		center = '37.642950, -120.996035';
		zoomMove=8;
	}
	center = center.split(",");
	var map = new google.maps.Map(document.getElementById('map'), {
      zoom: zoomMove,
      center: {lat: parseFloat(center[0]), lng: parseFloat(center[1])}
    });

	var contentString = '<div id="content">'+
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

	var infowindow = new google.maps.InfoWindow({
		content: contentString
        });

    var silverCreekCC = new google.maps.Marker({
      position: {lat: 37.276759, lng: -121.771754},
      map: map,
      title:'Mehendi'
    });

	var sangeethAtSilverCreek = new google.maps.Marker({
      position: {lat: 37.276947, lng: -121.767684},
      map: map,
      title:'Sangeeth & Reception'
    });

    var prHome = new google.maps.Marker({
    	position: {lat: 37.284095, lng:-121.780559},
    	map: map,
    	title: 'Making of Bride & Groom'
    });
    var yosemiteLodge = new google.maps.Marker({
      position: {lat: 37.743468, lng: -119.598263},
      map: map,
      title:'Informal Family Gathering at the Yosemite Lodge'
    });
    var majesticHotel = new google.maps.Marker({
    	position: {lat: 37.746286, lng:-119.574262},
    	map: map,
    	title: 'Ceremony & Lunch at The Majestic Yosemite Hotel'
    });

    silverCreekCC.addListener('click', function() {
    	infowindow.open(map, silverCreekCC);
        });


    sangeethAtSilverCreek.addListener('click', function() {
    	infowindow.open(map, sangeethAtSilverCreek);
        });

}

//this function will call the id of the day, on click
//it will need to clear the container
//and call function of constants for the day's events
function listOfEventsByDay() {
	$('button').click(function(e) {
		const centerpoint = $(this).attr('data-centerpoint');
		initMap(centerpoint);
		$(".days-stuff").empty();
		daysEventsObject[e.target.id].forEach(function(arg) {
			$(".days-stuff").append(`\
			<header id='boldTheHeader'>${arg.event}, ${arg.time}</header>
			<p>${arg.address}</p>
			<p>${arg.text}</p>
			<a href="${arg.link}" class="lightbox">${arg.event}</a>
			`)
		})

	}) 
}



//Thursday function displays the contents of the day with 
//this will link to a popup of a video of the events 

//Friday, we will need to clear the map and repopulate with 
//with info for friday 
$(listOfEventsByDay);