const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => { 
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.attributes.id.value;

        if(idSelecionado === 'minos') return; //Não vai aparecer no Jogador °1 pois esta selecionado

        const personagemSelecionado = document.querySelector('.selecionado'); //Efeito nas bordas
        personagemSelecionado.classList.remove('selecionado'); // tirando sempre que o mouse passa em outro personagem
        
        personagem.classList.add('selecionado');

        const imagemJogador1 = document.getElementById('personagem-jogador-1'); 
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`; //Trocando Jogador °1

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name'); 
    
        nomeJogador1.innerHTML = nomeSelecionado;
    })
})