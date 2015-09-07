/* jshint devel:true */
console.log('\'Allo \'Allo!');


function initialize() {
	var locations = [
	  ['Dublin Castle', 53.3428, -6.26742,'images/pin.svg'],
	  ['Trinity College', 53.3428, -6.16742, 'images/pin.svg'],
	  ['Dame Street', 53.3428, -6.36742, 'images/pin.svg'],
	  ['Guinness Storehouse', 53.3428, -6.46742, 'images/pin.svg'],
	  ['St. Patricks Church', 53.3428, -6.56742, 'images/pin.svg']
	];
	var map;
	var markers = [];


	map = new google.maps.Map(document.getElementById('map_canvas'), {
	zoom: 10,
	center: new google.maps.LatLng(53.3428,-6.26742),
	mapTypeId: google.maps.MapTypeId.ROADMAP
	});


	var num_markers = locations.length;
  	for (var i = 0; i < num_markers; i++) {  
	    markers[i] = new google.maps.Marker({
	      position: {lat:locations[i][1], lng:locations[i][2]},
	      map: map,
	      html: locations[i][0],
	      id: i,
	      icon: locations[i][3]
	    });
    } //for

    var infowindow = null;
	/* now inside your initialise function */
	infowindow = new google.maps.InfoWindow({
	content: "holding..."
	});

	for (var i = 0; i < markers.length; i++) {
	var marker = markers[i];	
	google.maps.event.addListener(marker, 'click', function () {
		

	//infowindow.setContent(this.html);
	//infowindow.open(map, this);
	 
	document.getElementById('info-container').innerHTML = this.html;


	if ($("#info-container").css("display") == "block") {
            $("#info-container").css("display", "none");
            this.setIcon("images/pin.svg");
        } else {
            $("#info-container").css("display", "block");
                           this.setIcon("images/pin-hover.svg");

        }

	});




	}

	
} //initialize() 

	google.maps.event.addDomListener(window, 'load', initialize);





