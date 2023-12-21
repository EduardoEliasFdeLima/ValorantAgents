function pesquisarAgente() {  
    var input = document.getElementById("Search"); //input de pesquisa dos agentes
    var filter = input.value.toLowerCase();  //variável filtro manda tudo pra letra minúscula
    var cards_agentes = document.getElementsByClassName('card');  //variável que pega todos os cards pela classe
    
    var itemsDisplayed = 0;  //variável flag pra verificar se teve resultado
    var noR = document.getElementById("no_results"); //pega a div que mostra que n teve resultado na pesquisa
    noR.style.display = "none";   //já some com ela de inicio
  
    for (i = 0; i < cards_agentes.length; i++) {   //for para habilitar os cards que batem com o valor da pesquisa
      if (cards_agentes[i].innerText.toLowerCase().includes(filter)) { //if para verificar se o resultado bateu e habilitar o card 
        cards_agentes[i].style.display = "block"; 
        itemsDisplayed += 1;  //flag para n mostrar a div sem resultados
      } else {
        cards_agentes[i].style.display = "none";
      }
    }
    if(itemsDisplayed === 0){
      noR.style.display = "block"; 
      //se não passar pelo if do for, cai aqui e mostra a div
    }

    limpaBtnFiltro(); //limpa os botões de filtro 
}
  


//função para limpar os botões do filtro
function limpaBtnFiltro(classepFiltrar){
  var btnfundo = document.getElementsByClassName("btn");

  for (i = 0; i < btnfundo.length; i++) {
    btnfundo[i].classList.remove("btnSelecionado")
  }
 
  //pega todas as classes dos botões e faz um for removendo a classe 
}

var valorAntigo = ""; //variavel flag

//com o clique vai filtrar para a a classe selecionada
function classefiltro(classepFiltrar) {

 
   var input = document.getElementById("Search");
   limpacampo(); //função pra limpar o input


   var lastchar = classepFiltrar.slice(-1);  //pega a última letra do valor enviado pra função 
   //Verifica a classe clicada para adicionar o plural no input
   if(lastchar == "a")
     input.value = `${classepFiltrar}s`;
   else
    input.value = `${classepFiltrar}es`;


    var cards = document.getElementsByClassName('card');  //variável com as classes card
    var valor = classepFiltrar; //pega o valor da classe do personagem

    var valorbtn = classepFiltrar;
    
    if (valorbtn == valorAntigo){
      //se for clicado de novo, ele limpa o filtro 
      reset();
      valorAntigo = "";

    }else{
      var cards_filtrados = document.getElementsByClassName(`${valor}`); //só vai pegar os cards com a classe do botão clicado
      for (i = 0; i < cards.length; i++) {	  //for pra pegar card por card e ir tirando ou pondo
          cards[i].style.display = "none";
        for (i2 = 0; i2 < cards_filtrados.length; i2++) {
          cards_filtrados[i2].style.display = "block";
        }       
      }

      limpaBtnFiltro();
      var btnfundo = document.getElementById(`Btn${valor}`);  //cria uma variável só com o botão selecionaod
      btnfundo.classList.toggle("btnSelecionado"); //toggle para adicionar ou remover classe do botão

      valorAntigo = classepFiltrar;
    }

}

//função para retornar todos os agentes na tela
function reset(){
    limpacampo();
    limpaBtnFiltro();
     var cardss = document.getElementsByClassName('card');
     for (i = 0; i < cardss.length; i++) {	
         cardss[i].style.display = "block"; //for pra habilitar todos os cards novamente
      }
    
}
   
//função para limpar o input de pesquisa
function limpacampo(){
     var input = document.getElementById("Search");
     input.value = ""; //limpa input
     
    var noR = document.getElementById("no_results");
    noR.style.display = "none"; //esconde a div sem resultado
   
}
