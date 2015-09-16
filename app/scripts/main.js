/* jshint devel:true */

//console.log('\'Allo \'Allo!');


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
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	scrollwheel: false,
	draggable: false
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



$(document).foundation({
    accordion: {
      callback : function (accordion) {
        //console.log(accordion);
      }
    }
});

$(".centered").fadeIn('slow').delay(3450);

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
            // [boolean] Generate the play and stop buttons.
            // You cannot use your own buttons. Sorry.
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

    /*responsive nav menu*/
	$(".menu-opener").click(function(){
  		$(".menu-opener, .menu-opener-inner, .menu").toggleClass("active");
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
    
    $(".accordion li").on("click", "a:eq(0)", function (event) {
    var li_parent = $(this).parent();

        if (li_parent.hasClass('active')) {
            $(".accordion li div.content:visible").slideToggle("fast");
        } else {
            $(".accordion li div.content:visible").slideToggle("normal");
            $(this).parent().find(".content").slideToggle("normal");
        }
    });
    
    $(window).on('scroll', function(e) {
       
       console.log('scrolling');
       
	   var navHeight = $( window ).height() - 0;
       var height = $('#bgIntro').height();    
			 if ($(window).scrollTop() > navHeight) {
				 $('nav').addClass('fixed');
                 //$('#bgIntro').remove();
                 $(document).scrollTop($(document).scrollTop() - height);
                 $('#bgIntro').remove();
			 }
			 else {
				 $('nav').removeClass('fixed');
			 }
            if ($('#bgIntro').length == 0){
                $('nav').addClass('fixed');
                $('nav').css('margin-top', '0');
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


