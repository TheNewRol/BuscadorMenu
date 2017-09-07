$(document).ready(function(){
    var map, geocoder, marker;
    var myLatLng = {lat: 41.9274705, lng: 2.2448564};
    
    function css(){
        
        $(".button-collapse").sideNav();
        
        if($(window).width() + 17 < 767){
            $("#divmap div").attr("id", "");
                $("#mapMovil div").attr("id", "map").css("height", "400px");
                initMap();
        }else{
            $("#mapMovil div").attr("id", "").html("").css("height", "0px");
            $("#divmap div").attr("id", "map");
            initMap();
        }
        
        $(window).resize(function() {
            console.log($(window).width()+17);
            if($(window).width() + 17 < 767){
                $("#divmap div").attr("id", "");
                $("#mapMovil div").attr("id", "map").css("height", "400px");
                initMap();
            }
            else{
                $("#mapMovil div").attr("id", "").html("").css("height", "0px");
                $("#divmap div").attr("id", "map");
                initMap();
            }
        });
    }
    
     function initMap(){
        
        geocoder = new google.maps.Geocoder();
        
        map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 17
        });
         
        //$("#provincia", "#poblacion").bind("change paste keyup", obtenerDatos); 
        $("#provincia").bind("change paste keyup", obtenerDatos);
        $("#poblacion").bind("change paste keyup", obtenerDatos);
        $("#calle").bind("change paste keyup", obtenerDatos);
        $("#numero").bind("change paste keyup", obtenerDatos);
    }
    
    function obtenerDatos(){
        var provincia = $("#provincia").val();
        var poblacion = $("#poblacion").val();
        var calle = $("#calle").val();
        var numero = $("#numero").val();
        
        if(provincia == undefined){
            provincia = "";
        }
        if(poblacion == undefined){
            poblacion = "";
        }
        if(calle == undefined){
            calle = "";
        }
        if(numero == undefined){
            numero = "";
        }
        
        var address = calle + ", " + numero + "," + poblacion + ", " + provincia;
        
        console.log(address);
        
        codeAddress(address);
    }
    
    function codeAddress(address) {
        geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            if(marker != undefined && marker != ""){
                marker.setMap(null);
                marker = "";
            }
            map.setCenter(results[0].geometry.location);
            marker = new google.maps.Marker({
                draggable: false,
                map: map,
                animation: google.maps.Animation.DROP,
                title: 'Nou Pamplona',
                position: results[0].geometry.location
            });
          } else {
            //console.log("Geocode unsuccessful");
          }
        });
    }
    
    function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }
    
    function geocoderReverse(){
        console.log("reverse");
        geocoder.geocode({'location': marker.getPosition()}, function(results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    result = {};
                    for (var i = 0; i < results[1].address_components.length; i++) {
                        ac = results[1].address_components[i];
                        result[ac.types[0]] = ac.long_name;
                    }
                    
                    $("#ubicacion").val(results[1].formatted_address);
                    console.log(result.route);
                }
            }
        });
    }
    
    
    function init(){
        css();
        //initMap();
    }
    
    init();
});