/* jshint devel:true */

var l = function(message) {
    console.log(message);
}

//console.log('\'Allo \'Allo!');

       var locations = [
    [
        "<div class='button-close'></div><div class='image'><img src='http://placehold.it/320x200'/></div><br/><p>Dublin Castle</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p><a href='http://www.deanhoteldublin.ie'>www.deanhoteldublin.ie</a><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.343021 , -6.267411,
    1],
    [
        "<div class='button-close'></div><div class='image'><img src='http://placehold.it/320x200'/></div><br/><p>Trinity College</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p><a href='http://www.deanhoteldublin.ie'>www.deanhoteldublin.ie</a><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.343805, -6.254550,
    2],
    [
        "<div class='button-close'></div><div class='image'><img src='http://placehold.it/320x200'/></div><br/><p>St Patricks Church</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p><a href='http://www.deanhoteldublin.ie'>www.deanhoteldublin.ie</a><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.340241, -6.271209 ,
    3],
    
];
var markers = [];
var map;

function initialize() {
        
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        minZoom: 10, 
	    maxZoom: 20, 
        zoom: 14,
        center: new google.maps.LatLng(53.347584, -6.259391),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        scrollwheel: false,
        draggable: false,
        
    });

    map.set('styles', [
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
          { color: '#FFFFFF' }
        ]
      }, {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          { "visibility": "off" }
        ]
      },{
        "featureType": "transit",
        "elementType": "labels.icon",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          { "visibility": "off" }
        ]
      },
       {
        "featureType": "administrative",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "administrative.neighborhood",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
          { "visibility": "off" }
        ]
      },        
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { "visibility": "off" }
        ]
      }, {
        featureType: 'poi.school',
        elementType: 'geometry',
        stylers: [
         { "visibility": "off" }
        ]
      },{
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            { "color": "#02a182" },
            { "visibility": "on" }
        ]
      },
        {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }
        ]
      }
    ]);
    
    var infowindow = new google.maps.InfoWindow();
    var iconBase = 'images/pin.svg';
    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            icon: iconBase
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            
            
            return function (e) {
                infowindow.setContent(locations[i][0], locations[i][6]);
                infowindow.close(map, marker);
                for (var j = 0; j < markers.length; j++) {
                    markers[j].setIcon("images/pin.svg");
                }
                document.getElementById('info-container').innerHTML = locations[i][0];                     marker.setIcon("images/pin-hover.svg");

                //pan map to exact location of the pin      
                var newH = marker.getPosition().H - 0.0000;
                var newL = marker.getPosition().L - -0.0200;         
                map.panTo( new google.maps.LatLng( newH, newL ) );

                $('.button-close').on("click",function(){
                  $("#info-container").fadeOut();
                });

                $("#info-container").fadeIn("normal");

            };
        })(marker, i));
        
        markers.push(marker);
    }
    
    $(document).on("click", ".prev-button", function(){
            l('work');
        
              
    });
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).foundation({
     accordion: {
        content_class: 'content',
        active_class: 'active',
        multi_expand: false,
        toggleable: true
      }
});


//Intro Text
$(".centered").fadeIn('slow').delay(3450);

//Slides 
$( document ).ready(function() {
    //slides
	$('#slides').slidesjs({
	    width: 480,
	    height: 300,
        navigation: true,
        pagination: true
    });
    $('#slides2').slidesjs({
	    width: 1000,
	    height: 595,
        navigation: false,
        play: {
          active: false,
          effect: "slide",
            // [string] Can be either "slide" or "fade".
          interval: 9000,
            // [number] Time spent on each slide in milliseconds.
          auto: true,
            // [boolean] Start playing the slideshow on load.
          swap: true,
            // [boolean] show/hide stop and play buttons
          pauseOnHover: false,
            // [boolean] pause a playing slideshow on hover
          restartDelay: 3500
            // [number] restart delay on inactive slideshow
        }
	});
});

    //responsive nav menu
	$(".menu-opener").click(function(){
        $(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
	});
    $('.menu-inner a li').click(function() {
      $(".menu-opener, .menu-opener-inner, .menu").removeClass("active");
    });


    // when you click a menu item
    $('nav a').on('click', function(e){
      // stop the default behaviour  
      e.preventDefault();
      // fine the related section
      var findSection = 'section' + $(this).context.hash;
      // get it’s top position as a number
      var currentSection = $(findSection).offset().top;
      // scroll to that number
      $("html, body").animate({ scrollTop: currentSection + 5 });
    });

	// Back to Top
    // Show or hide the sticky footer button
	$(window).scroll(function() {
		if ($(this).scrollTop() > 200) {
			$('.go-top').fadeIn(200);
		} else {
			$('.go-top').fadeOut(200);
		}
	});

	// Animate the scroll to top
	$('.go-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: -65}, 900);
	});

    
    $(window).on('scroll', function(e) {
        if($(window).width() > 1024) {
        console.log('scrolling');
       
           var navHeight = $(window).height() - 0;
           var height = $('#bgIntro').height();    
			 if ($(window).scrollTop() > navHeight) {
				 //$('nav').addClass('fixed');
                 //$('#bgIntro').remove();
                 $('#bgIntro').remove();
                 $(document).scrollTop($(window).scrollTop() - height);   
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
             if ($('#bgIntro').length == 0){
                 $('nav').addClass('fixed');
                 $('nav').css('margin-top', '0');
             }
        }
        event.preventDefault();
    });
    
    // console log wrapper so you only have to type l() not console.log()
    function l(m) {console.log(m);}

    // on scroll
    $(window).on('scroll', function(e){
  
        // on scroll log how far scrolled
        currentScroll = e.currentTarget.pageYOffset;
        // for each section hightlight the relevant item in the navbar
        $('section').each(function(){
        // set the top position
        topPos = $(this).offset().top
        // set the bottom position
        bottomPos = $(this).offset().top + $(this).height();
        // check if the current scroll between the elements top and bottom position
            if(currentScroll > topPos && currentScroll < bottomPos) {
            // get the current elements id
            var id = $(this)[0].id,
            // make the menu selector with that id
            menuItem = "a[href*='#" + id + "']";
            // remove class from all items
            $('nav li a').removeClass('active');
            // apply the class to the current item
            $(menuItem).addClass('active');
            }
        });   
    });