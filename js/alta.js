$(document).ready(function(){
    
    function css(){
        /*
            Dispositivos pequeños (tablets, anchura mayor o igual a 768px) 
            @media (min-width: @screen-sm-min) { ... }
        */
        var anchoPantalla = screen.width;
        if(anchoPantalla > 1366){
            //$("#mapMovil")
        }
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
        initMap();
    }
    
    init();
});