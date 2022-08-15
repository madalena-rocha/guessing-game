// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener('click', handleTryClick)
// addEventListener recebe 2 argumentos, uma string com o nome do evento e uma função callback que irá executar um código em reação ao evento
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleEnterKey)

/* 
Funções callback:
- Função passada como argumento de outra função
- Função registrada para ser executada sempre que clicar
- Função que não é executada automaticamente ao ler na aplicação
*/

function handleTryClick(event) {
    // a função handleTryClick recebe o evento event, um objeto com todos os dados do evento de clique
    event.preventDefault() /* evitando o envio do formulário e o recarregamento automático da página ao clicar no botão */

    const inputNumber = document.querySelector("#inputNumber")

    // o input não possui conteúdo interno, não sendo possível pegar o seu valor utilizando o innerText, devendo capturar o valor utilizando o value
    if(Number(inputNumber.value) == randomNumber) {
        toggleScreen()
    
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }

    inputNumber.value = "" // sempre que fizer uma tentativa, apagar o campo do input
    xAttempts++
}

function handleResetClick() {
    toggleScreen()
    xAttempts = 1
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnterKey(e) {
    if(e.key == 'Enter') {
        handleResetClick()
    }
}