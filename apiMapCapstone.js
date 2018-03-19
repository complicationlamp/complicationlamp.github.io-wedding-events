
//make an object of all my info
const daysEventsObject = {
	Thursday: {
		day: 'Thursday',
		event1:'Mehendi',
		location1: 'this is at the Peddireddy home',
		address:'this is a test of the address'
	},
	Friday: {	
		day: 'Friday',
		event1:'Mehendi',
		location1: 'this is at the Peddireddy home',
		address:'this is a test of the address'
	}}

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
	console.log('first ran');
	$('#thursdayButton').click(function() {
		console.log('this ran');
		// return `thngsssssss`;
	
		//remove the box contencts
		$(".days-stuff").empty();
		$(".days-stuff").append(daysEventsObject['Thursday'].day);
	}) 
}



//Thursday function displays the contents of the day with 
//this will link to a popup of a video of the events 

//Friday, we will need to clear the map and repopulate with 
//with info for friday 
$(listOfEventsByDay);