(function( $ ) {
    "use strict";

    $.fn.australia = function() {

        function getsupportedprop(proparray){
            var root = document.documentElement; //reference root element of document
            for (var i=0; i<proparray.length; i++){ //loop through possible properties
                if (typeof root.style[proparray[i]] === "string"){ //if the property value is a string (versus undefined)
                    return proparray[i]; //return that string
                }
            }
        }

        function changecssproperty(target, prop, value, action){
            if ( typeof prop !== undefined ) {
                if(action === "remove"){
                    target.style[prop] = "";
                } else {
                    target.style[prop] = value;
                }
                //target.style[prop] = (action == "remove") ? "" : value;
            }
        }


        // init
        var csstransform = getsupportedprop(["transform", "MozTransform", "WebkitTransform", "msTransform", "OTransform"]);
        changecssproperty(document.body, csstransform, "rotate(180deg)");


        $(window).bind("orientationchange", function(e) {

            switch ( window.orientation ) {

            case 0:
                //alert("portrait mode");
                changecssproperty(document.body, csstransform, "rotate(180deg)");
                break;

            case 90:
                changecssproperty(document.body, csstransform, "rotate(-90deg)");
                //alert("landscape mode screen turned to the left");
                break;

            case -90:
                changecssproperty(document.body, csstransform, "rotate(-90deg)");
                //alert("landscape mode screen turned to the right");
                break;

            }
        });

    };


    $(document).ready(function(){
        $(this).australia();
    });


})(jQuery);

