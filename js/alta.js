$(document).ready(function(){
    
    function css(){
        /*
        Inicialización del menu hamburgesa
        */
        $(".button-collapse").sideNav();
        
        /*
        Colocar mapa dependiendo de si es movil o pc
        */
        if($(window).width() + 17 < 767){
            $("#divmap div").attr("id", "");
                $("#mapMovil div").attr("id", "map").css("height", "400px");
                initMap();
        }else{
            $("#mapMovil div").attr("id", "").html("").css("height", "0px");
            $("#divmap div").attr("id", "map");
            initMap();
        }
        /*
        Recolocar mapa en caso de modificar la anchura de la pantalla
        */
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
        
        var myLatLng = {lat: 41.9274705, lng: 2.2448564};
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            scrollwheel: false,
            zoom: 17
        });
        //Creamos el marcador del mapa
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Nou Pamplona'
        });
        //aÃ±adiendo el marker al mapa
        marker.setMap(map);
    }
    
    function init(){
        css();
    }
    
    init();
});