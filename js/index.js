$(document).ready(function(){
    
    
    var index_hash = window.location.hash;
    array_token = index_hash.split('=');
    token_url = array_token[1];
    
   
    //Se tiver um valor get chamado TOKEN da URL
    if((token_url != null) && (token_url != 'undefined') && (token_url != undefined) && (token_url != '')){

        //Salva com data o valor recebido do token
        //e leva o usuario para a segunda pagina
        $.Storage.saveItem('token',token_url);
        $(window.document.location).attr('href', 'c.html');
     }
    
    //Quando o botao entrar da tela splash for clicado   
    $("#spl_entrar").click(function() {
   
        //url da API do Instagram
        url = "https://api.instagram.com/oauth/authorize/?client_id=290eaa1efc0e4d658f71a35389e8f6b1&redirect_uri=http://" + window.location.host + window.location.pathname + "&response_type=token&scope=basic+relationships";
        
        //Pega o valor do token
        token = $.Storage.loadItem('token');
        
        //Verifica se o usuario está logado ou nao
        //Se estiver logado, então vai pra segunda pagina
        if(token != false){
            $(window.document.location).attr('href', 'c.html');
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
    
    //$.mobile.navigate( "c.html", { transition : "flow"} );
   
});
