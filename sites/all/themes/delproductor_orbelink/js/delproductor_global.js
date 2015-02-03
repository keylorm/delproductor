jQuery.noConflict(); 
jQuery(document).ready(function(){
	
	jQuery('#zone-menu-wrapper #block-system-main-menu .menu .mp').hover(
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				jQuery('body').addClass('mopen');
				subm.show('slow');
			}
			//console.log(subm[0]);
         }, 
         function () {
		 	var subm = jQuery(this).find(".menu");
			if(subm[0] != undefined){
				jQuery('body').removeClass('mopen');
				subm.hide('slow');
			}			
			//console.log(subm[0]);
         }
     );
	
	
	
	
});