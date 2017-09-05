$(document).ready(function(){
      
    function css(){
        $(".button-collapse").sideNav();
        
        $('.modal').modal({
                dismissible: true,
                inDuration: 300, // Transition in duration
                outDuration: 200
            });
        
        
        $(".modal-trigger").click(function(){
             $('#modal1').modal('open');
        });
        $(".aceptar, cancelar").click(function(){
            $('#modal1').modal('close');
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
        initMap();
    }
      
    init();
});
