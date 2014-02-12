$(document).ready(function(){
       
    

    $("#spl_entrar").click(function() {
                
        var token_url = getUrlVars()["token"];
        if(token_url != null){
            $("body").data("token", token);
            $.mobile.navigate( "#page", { transition : "slide"} );
        }
                
        //url da API do Instagram
        url = "https://api.instagram.com/oauth/authorize/?client_id=290eaa1efc0e4d658f71a35389e8f6b1&redirect_uri=http://" + window.location.host + window.location.pathname + "&response_type=code";
        
        //Pega o valor do token
        token = $("body").data("token");
      
        //Verifica se o usuario está logado ou nao
        //Se estiver logado, então vai pra segunda pagina
        if(token != null){
          alert("oi");
            $.mobile.navigate( "#page", { transition : "slide"} );
        
        //Se não estiver logado redireciona 
        //para a API do instagram
        }else{
            $(window.document.location).attr('href', URL);
        }

    });
    
    /*$( window ).on( "navigate", function(){
       alert('mudou');
    });*/
    
    //$("body").data("token", 52);
   
});
