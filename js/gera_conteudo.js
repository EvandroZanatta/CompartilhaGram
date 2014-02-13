//Função da home
//Carrega fotos da time line
//e coloca eles na tela
$(document).ready(function(){
    
    //----- Verifica se o usuário está logado ----
    //Pega o valor do token
    token = $.Storage.loadItem('token');
    if(token == false){
        $(window.document.location).attr('href', 'index.html');
    }
    
    //Quando abrir a pagina, chama a 
    //função que exibe os dados do index
    func_home();
    
    //Função sair
    $("#esp_sair").click(function() {
        func_exit();
    });
    
    $("#esp_breve").click(function() {
        alert("Em Breve");
    });
});


//Função que carrega  as 
//fotos e dados da TimeLine
function func_home(){

        
  //Pega o valor do token
  token = $.Storage.loadItem('token');
  var url = "https://api.instagram.com/v1/users/self/feed?access_token="+token;
 
    $.ajax({
        method: "GET",
        url: url,
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        success: function(data) {
            
           $.each(data.data, function(i, item){
                //alert(item.images.standard_resolution.url);
                //$( "<img>" ).attr( "src", item.images.standard_resolution.url ).appendTo( "#index_imagens" );
                
                var html_ins = '<div class="ui-body ui-body-a ui-corner-all" style="margin-bottom: 20px;"><div class="ui-grid-e"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:40px; background-color: #fff; border: 0px;">';
                html_ins = html_ins+'<img src="'+ item.user.profile_picture +'" style="max-height: 100%; max-width: 100%; border-radius: 100%;" /></div></div>';
                html_ins = html_ins+'<div class="ui-grid-solo"><div class="ui-block-a"><div class="ui-bar ui-bar-a" style="height:40px; background-color: #fff; border: 0px;">' + item.user.username + '</div></div><!-- /grid-a --></div><!-- /grid-c -->';
                html_ins = html_ins+'<img src="' + item.images.standard_resolution.url + '" style="width: 100%; margin-top: 10px;" /></div>';
                
                $(html_ins).appendTo("#index_imagens")
                
                
           });  
           
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //alert("Check you internet Connection");
            alert(("#log").val() + 'Error\n');
        }
    });

}

//Função Sair
function func_exit(){
    
    //Limpa todos os valor de LocalStorage
    $.Storage.deleteAll();
    
    //Redireciona para a pagina principal
    $(window.document.location).attr('href', 'index.html');
}