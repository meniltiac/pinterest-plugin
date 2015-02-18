9// -------------------------------------------------------------------------------- //
//					   PINTEREST PLUGIN
//					   CREATED 1/2015 BY CAITLIN McKENNA
// -------------------------------------------------------------------------------- //


jQuery(document).ready(function() {
	
	
// -------------------------------------------------------------------------------- //
// FIND ANY IMAGES in #post_body that are not already wrapped in a .pin-wrapper div.
//
// NOTE:
// If you are adding this to a new site, replace #post_body with the wrapper div or element that you want to search for images within.
// -------------------------------------------------------------------------------- //

	jQuery('#post_body').find('img').each(function(index) {
		if($(this).parents('.pin-wrapper').length) {
			// Do Nothing			
		} else {
		
			if((this).width > 200) {
				// Wrap Image in .pin-wrapper for pinterest button
				jQuery(this).wrap("<div class='pin-wrapper'></div>");
			}
		}
	});


// -------------------------------------------------------------------------------- //
// APPLY TOUCH FUNCTIONALITY TO MOBILE DEVICES	
// -------------------------------------------------------------------------------- //

	var windowWidth = jQuery(window).width();
	
	//This is for Mobile Devices with a screen width of 1024 and below
	if (windowWidth < 1025) {
	
		jQuery('.pin-wrapper').on('touchstart', function(e) {
			
				var xPos = e.originalEvent.touches[0].pageX;
				var yPos = e.originalEvent.touches[0].pageY;
		
			
		   		if (xPos < $(this).offset().left + 40 && yPos < $(this).offset().top + 40) {	   		
			   		
			   		e.preventDefault();
			   		
				   		var imageURL = jQuery('img', jQuery(this)).attr('src');
						var imageURL = encodeURIComponent(imageURL);  	
						var currentPageURL = encodeURIComponent(window.location.href);
						
						// These variables should be changed, depending on the client
						var guid = "Add Your Brand's GUID Here";
						var brandDescription = "Add Your Brand's Description Here";
						
						// Don't change this variable, it will grab the alt tag from the images
						var imageDescription = jQuery('img', jQuery(this)).attr('alt');
						
						
						var pinterestURL = "http://www.pinterest.com/pin/create/button/?guid=" + guid + "=" + currentPageURL + "&media=" + imageURL + "&description=" + brandDescription + imageDescription;
						
					window.open( pinterestURL, "popupWindow");
			   		
			   	}
		   });
	} 
	
// -------------------------------------------------------------------------------- //
// APPLY CLICK FUNCTIONALITY TO DESKTOP	
// -------------------------------------------------------------------------------- //
		
		else {
		
			// Add cursor: pointer to button hover, cross-browser compatible
			jQuery('.pin-wrapper').mousemove(function(m) {
				
				var xPos = m.clientX;
				var yPos = m.clientY; 
				var xDiv = $(this).offset().left;
				var yDiv = $(this).offset().top;

				if(xPos < $(this).offset().left + 60 && xPos > $(this).offset().left + 14 && yPos < $(this).offset().top + 40 && yPos > $(this).offset().top + 10) {
					jQuery(this).css("cursor", "pointer");
				}
				else {
					jQuery(this).css("cursor", "auto");
				}


				
			});		
	
			// Add click functionality, based on X and Y coordinates of button, user click
			jQuery('.pin-wrapper').click(function(e) {
				
					var xPos = e.clientX;
					var yPos = e.clientY;
				
			   		if (xPos < $(this).offset().left + 55 && yPos < $(this).offset().top + 45) {	   		
				   		
				   		e.preventDefault();
	
				   		var imageURL = jQuery('img', jQuery(this)).attr('src');
						var imageURL = encodeURIComponent(imageURL);  	
						var currentPageURL = encodeURIComponent(window.location.href);
						
						// These variables should be changed, depending on the client
						var guid = "Add Your Brand's GUID Here";
						var brandDescription = " Add Your Brand's Description Here ";
						
						// Don't change this variable, it will grab the alt tag from the images
						var imageDescription = jQuery('img', jQuery(this)).attr('alt');
						
						
						var pinterestURL = "http://www.pinterest.com/pin/create/button/?guid=" + guid + "=" + currentPageURL + "&media=" + imageURL + "&description=" + brandDescription + imageDescription;
							
						window.open( pinterestURL, "popupWindow", "width=675, height=350");
				   		
				   	}
			   });
		
		 }
});



