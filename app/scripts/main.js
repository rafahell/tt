/* jshint devel:true */

var l = function(message) {
    console.log(message);
};

//console.log('\'Allo \'Allo!');

       var locations = [
    [
        "<div class='button-close'></div><div class='image'><img src='images/dublin-castle.jpg'/></div><br/><p>Dublin Castle</p><p style='height: 125px; margin-bottom: 0; margin-top: 0;'>Dublin Castle & City Hall The Normans first invaded Ireland in 1169 and later built Dublin Castle and its surrounding walls as a protective structure. The castle remained the symbol of British power in Ireland for over 700 years until it was officially handed over to the Irish Freestate led by Michael Collins after the end of the civil war.</p><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.343785, -6.267577,
    1],
    [
        "<div class='button-close'></div><div class='image'><img src='images/ship-street.jpg'/></div><br/><p>Ship Street</p><p style='height: 125px; margin-bottom: 0; margin-top: 0;'>Ship Street has one of the last remaining sections of Dublin’s old city walls. It’s also located beside the area where Dublin got its name – 'Dubh Linn'.</p><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.342718, -6.267179,
    2],
    [
        "<div class='button-close'></div><div class='image'><img src='images/smock-alley.jpg'/></div><br/><p>Temple Bar/ Smock Alley </p><p style='height: 125px; margin-bottom: 0; margin-top: 0;'>Temple Bar has a long and varied history. Today it is Dublin’s ‘Cultural Quarter’ and is home to many galleries, studios, theatres, performance venues, exhibition spaces and cinema screens including the oldest theatre in Dublin – Smock Alley built in 1662. And there’s also a few pubs too!</p> <div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.344780, -6.268911,
    3],
    [
        "<div class='button-close'></div><div class='image'><img src='images/georges-arcade.jpg'/></div><br/><p>The Creative Quarter/ Georges Street Arcade </p><p style='height: 125px; margin-bottom: 0; margin-top: 0;'>The ‘Creative Quarter’ is named for the eclectic mix of small independent boutiques, vintage shops, galleries and artisanal food producers located here, giving the area a distinctly unique feel in Dublin city. The area also has a great nightlife with tonnes of restaurants, cafés and bars catering for every taste.</p><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.342470, -6.263224,
    4],
    [
        "<div class='button-close'></div><div class='image'><img src='images/south-anne-st.jpg'/></div><br/><p>South Anne Street/ Shopping District</p><p style='height: 125px; margin-bottom: 0; margin-top: 0;'>This area looks onto Grafton Street, the main shopping street in Dublin, where the big international brands and shops are usually located. There’s also some interesting little pubs to see on the side streets, like Keogh’s – a classic in Dublin city centre!</p><div class='buttons-container'><img class='prev-button' src='images/prev.svg' width='35' height='35'><img class='next-button' src='images/next.svg' width='35' height='35'></div>",
    53.341089, -6.259342,
    5],
    
];
var markers = [];
var map;

function initialize() {
        
    map = new google.maps.Map(document.getElementById('map_canvas'), {
        minZoom: 14, 
	    maxZoom: 20, 
        zoom: 15,
        center: new google.maps.LatLng(53.344227, -6.264530),
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
                var newL = marker.getPosition().L - -0.0100;         
                map.panTo( new google.maps.LatLng( newH, newL ) );

                $('.button-close').on("click",function(){
                  $("#info-container").fadeOut();
                    marker.setIcon("images/pin.svg");
                });
            

                $("#info-container").fadeIn("normal");

            };
        })(marker, i));
        
        markers.push(marker);
    }
    

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
	$(".menu-opener-inner").click(function(){
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

    
    $(document).on('scroll', function(e) {
        if($(window).width() > 767) {
        console.log('scrolling');
       
           var navHeight = $(window).height() - 0;
           var intro = $('#bgIntro').height();    
			 if ($(window).scrollTop() > navHeight) {
				 //$('nav').addClass('fixed');
                 //$('#bgIntro').remove();
                 $('#bgIntro').remove();
                 $(document).scrollTop($(window).scrollTop() - intro);  
                 //$('html, body').animate({scrollTop:$(document).height()}, 1000);
                 //console.log('intro is gone');
                 $(document).unbind('scroll');
                 
			 }
			 else {
				 $('nav').removeClass('fixed');
                 //console.log('else - remove fixed');
               
			 }
             if ($('#bgIntro').length === 0){
                 $('nav').css('position','fixed');
                 $('nav').css('margin-top', '0');
                 //console.log('else - remove fixed');
                  
             }
        }
        
        e.preventDefault(); 
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
        topPos = $(this).offset().top;
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