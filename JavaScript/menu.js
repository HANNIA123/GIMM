 
$(document).ready(function () {
    //Detectar redimension de la pantalla
    $(window).resize(function () {
         cambio();
    });
    
    cambio();
    
    function cambio(){
         if($(window).width() <=1200){
    //menú responsive, dispositivos moviles
    $(".submenu ").click(function(e){


       e.preventDefault();
    var contenido=$(this).next(".con-sub");
     

        if(contenido.css("display")=="none"){ //open	
     
           
       contenido.slideDown(250);			
          $(this).addClass("open");
      
        }
        else{ //close		
          contenido.slideUp(250);
          $(this).removeClass("open");	
        
    }
      
                         });
    }
    
        else{
            //Otra función para el menú tamaño completo
            alert("tamaño grande");
        }
       
   
        
        
        
    }
});
 
 
 
 
