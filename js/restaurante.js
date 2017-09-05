$( document ).ready(function(){
    function css(){
        $('.modal').modal();
        $(".button-collapse").sideNav();
         $('.carousel.carousel-slider').carousel({fullWidth: true});
    }
    
    function initMap(){
        /*
        para realizar busquedas en un mapa de google maps
        https://jafrancov.com/2011/12/trazar-rutas-gmaps-api-v3/
        */
        var myLatLng = {lat: 41.9274705, lng: 2.2448564};
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            //scrollwheel: false,
            zoom: 17
        });
        //Creamos el marcador del mapa
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Nou Pamplona'
        });
        //añadiendo el marker al mapa
        marker.setMap(map);
    }
    
    function init(){
        css();
        initMap();
    }
    
    init();
});