//Objetivo:01 - Quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
//Passo:01 - Pegar os personagens no JS para poder verificar quando o usuário passar o mouse em cima de um deles

const personagens = document.querySelectorAll('.personagem');

//Passo:02 - Adicionar a classe selecionada no personagem que o usuário passar o cursor do mouse
personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () =>{

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behavior:'smooth'});
        }
        
        //Passo:03 - Verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');        
        personagem.classList.add('selecionado');

        //Objetivo:02 - Quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

        //Passo:01 - Pegar o elemento do personagem grande para adicionar as informações nele
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        //Passo:02 -  Alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem);
        imagemPersonagemGrande.src =`./src/imagens/card-${idPersonagem}.png`;

        //Passo:03 - Alterar o nome do personagem grande
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        //Passo:04 - Alterar a descrição do personagem
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

    })
})
