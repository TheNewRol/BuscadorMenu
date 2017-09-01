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
      
    function init(){
        css();
    }
      
    init();
});
