$(document).ready(function(){
    
    //Pega o valor get chamado TOKEN da url
    var token_url = getUrlVars()["code"]; 

    //Se tiver um valor get chamado TOKEN da URL
    if(token_url != null){

        //Salva com data o valor recebido do token
        //e leva o usuario para a segunda pagina
        $("body").data("token", token_url);
        $.mobile.navigate( "#pagina2", { transition : "slide"} );
     }
    
    //Quando o botao entrar da tela splash for clicado   
    $("#spl_entrar").click(function() {
                
        //url da API do Instagram
        url = "https://api.instagram.com/oauth/authorize/?client_id=290eaa1efc0e4d658f71a35389e8f6b1&redirect_uri=http://" + window.location.host + window.location.pathname + "&response_type=code";
        
        //Pega o valor do token
        token = $("body").data("token");
      
        //Verifica se o usuario está logado ou nao
        //Se estiver logado, então vai pra segunda pagina
        if(token != 'undefined'){
            $.mobile.navigate( "#pagina2", { transition : "slide"} );
        
        //Se não estiver logado redireciona 
        //para a API do instagram
        }else{
            $(window.document.location).attr('href', url);
        }

    });
    
    /*$( window ).on( "navigate", function(){
       alert('mudou');
    });*/
    
    //$("body").data("token", 52);
   
});
