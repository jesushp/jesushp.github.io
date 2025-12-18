(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-9cb4220e-979b-4a38-9417-9c0d6e130d9d .ui-page").overscroll({ showThumbs:false, direction:'none', roundCorners:false, backgroundColor:'', opacity:'', thickness:'', scrollSpacing:''});
            jQuery(".s-9cb4220e-979b-4a38-9417-9c0d6e130d9d #s-Panel_2 .layoutWrapper:first").overscroll({ showThumbs:false, direction:'horizontal', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
            jQuery(".t-f39803f7-df02-4169-93eb-7547fb8c961a .ui-page").overscroll({ showThumbs:true, direction:'multi', roundCorners:true, backgroundColor:'black', opacity:'0.45', thickness:'3', scrollSpacing:'2.5'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);