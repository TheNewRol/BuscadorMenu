$(document).ready(function(){
    var map, geocoder, marker;
    var myLatLng = {lat: 41.9274705, lng: 2.2448564};
    
    function css(){
        
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
         
         marker = new google.maps.Marker({});
        //Creamos el marcador del mapa
        /*marker = new google.maps.Marker({
            draggable: true,
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Nou Pamplona'
        });
        //aÃ±adiendo el marker al mapa
        marker.setMap(map);*/
         
        $("#provincia").bind("change paste keyup", obtenerDatos); 
        $("#poblacion").bind("change paste keyup", obtenerDatos);
    }
    
    function obtenerDatos(){
        var provincia = $("#provincia").val();
        var poblacion = $("#poblacion").val();
        
        if(provincia == undefined){
            provincia = "";
        }
        if(poblacion == undefined){
            poblacion = "";
        }
        
        var address = provincia + ", " + poblacion;
        
        console.log(address);
        
        codeAddress(address);
    }
    
    function codeAddress(address) {
        geocoder.geocode({ 'address': address }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            marker.set
            /*marker = new google.maps.Marker({
                draggable: true,
                map: map,
                position: results[0].geometry.location
            });*/
            marker.addListener('click', toggleBounce);
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
    
    function init(){
        css();
        //initMap();
    }
    
    init();
});