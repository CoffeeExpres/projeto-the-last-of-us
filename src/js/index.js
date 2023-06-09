/* 
OBJETIVO - Quando clicarmmos no botão temos que mostrar a imagem de fundo correspondente 

- Passo 1 - Dar um jeito de pegar o elemento HTML dos botões

- Passo 2 - Dar um jeito de indentificar o clique do usuário no botão

- Passo 3 - Desmarcar o botão selecionado anteriror

- Passo 4 - Marcar o botão clicado como se estivesse selecionado

- Passo 5 - Esconder a imagem de funo anterior

- Passo 6 - Fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// Passo 1 - Dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll ('.botao');
const imagens = document.querySelectorAll ('.imagem')

//Passo 2 - Dar um jeito de indentificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //Passo 3 - Desmarcar o botão selecionado 
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        // Passo 4 - Marcar o botão clicado como se estivesse selecionado
        botao.classList.add('selecionado')

        // Passo 5 - Esconder a imagem de funo anterior
        const imagemAtiva = document.querySelector('.ativa') 
        imagemAtiva.classList.remove('ativa')

        //Passo 6 -Fazer aparecer a imagem de fundo correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
   })
})