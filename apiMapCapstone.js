
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
		address:'this is at the Peddireddy home',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text:''
	},
	{
		event:'Sangeeth & Reception',
		time:'6:30pm',
		address:'Silver Creek Valley Country Club, 5460 Country Club Pkwy, San Jose, CA 95138',
		link: 'https://youtu.be/K3AQ8U2wqYc',
		text: ''
	}]}

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

//this function will call the id of the day, on click
//it will need to clear the container
//and call function of constants for the day's events
function listOfEventsByDay() {
	$('button').click(function(e) {
		$(".days-stuff").empty();
		daysEventsObject[e.target.id].forEach(function(arg) {
			$(".days-stuff").append(`\
			<header>${arg.event}, ${arg.time}</header>
			<p>${arg.address}</p>
			<p>${arg.text}</p>
			<a href="${arg.link}" class="lightbox">${arg.event}</a>
			`)
		})
		
		// daysEventsObject.html(daysEventsObject.html().replace(/\n/g,'<br/>'));

		//might want to put in an if this === thursday run the thursday function
	}) 
}



//Thursday function displays the contents of the day with 
//this will link to a popup of a video of the events 

//Friday, we will need to clear the map and repopulate with 
//with info for friday 
$(listOfEventsByDay);