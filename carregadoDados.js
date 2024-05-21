var overlay = document.getElementById('overlay');

window.addEventListener('load', function(){
    overlay.style.display = 'none';

    const secaoAgentes = document.querySelector("#cards");
    agentes.forEach(agente => secaoAgentes.append(card(agente.nome, agente.imagem, agente.tipo, agente.imagemfundo)));
})


function card(nome, imagem, tipo, imagemfundo){ //parâmetros passados pelo foreach
    const card = document.createElement("div");
    card.classList.add("card");
    card.title = nome;
    card.classList.add(tipo);
    //cria o card, adiciona classe e o title

    const div_imgs_agentes = document.createElement("div");
    div_imgs_agentes.classList.add("imgg");
    //cria a div pra por a foto do agente e adiciona a classe


    const imgs_agentes = document.createElement("img");
    imgs_agentes.src = imagem;
    imgs_agentes.alt = nome;
    //cria o elemento img pra por a imagem do agente

    const div_nome_agente = document.createElement("div");
    div_nome_agente.classList.add("nm");
    //div para o nome do agente

    const nome_agente = document.createElement("p");
    nome_agente.innerHTML = nome;
    //elemento para a div do nome

    const div_imgs_fundo = document.createElement("div");
    div_imgs_fundo.classList.add("imgback");
    //div para a imagem de fundo do card

    const imgbackk = document.createElement("img");
    imgbackk.src = imagemfundo;
    imgbackk.alt = tipo;
    //div que cria o elemento img pra div e pra por a foto 

    
    card.appendChild(div_imgs_agentes); //adiciona a div da imagem para o agente np card
    div_imgs_agentes.appendChild(imgs_agentes); //adiciona a img do agente pra div imagem dele
    card.appendChild(div_nome_agente); //adiciona a div do nome no card
    div_nome_agente.appendChild(nome_agente); //adiciona o nome na div do nome
    card.appendChild(div_imgs_fundo); //adiciona a div do fundo no card
    div_imgs_fundo.appendChild(imgbackk); //adiciona a imagem na div do fundo do card


    return card;
    //retorna a função para criar o card

}
