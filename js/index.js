$(document).ready(function(){

    $("#spl_entrar").click(function() {
                
        url = "https://api.instagram.com/oauth/authorize/?client_id=290eaa1efc0e4d658f71a35389e8f6b1&redirect_uri=http://" + window.location.host + window.location.pathname + "/&response_type=code";
        
        $("body").data("token", 52);
        
        token = $("body").data("token");
      
        if(token == null){
          alert("oi");
            $.mobile.navigate( "#page", { transition : "slide"} );
        }else{
            window.open(url, '_blank');
           
        }

    });
    
    /*$( window ).on( "navigate", function(){
       alert('mudou');
    });*/
    
    
   
});
