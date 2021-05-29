//pegando o botao do htm
//let botaoCalcular = document.getElementById('btnCalcular').onclick = calculandoIMC();


function calculandoIMC () {
    //pegando o VALOR do peso e da altura do html
    let peso = parseInt(document.getElementById("peso").value, 10)
    let altura = parseFloat(document.getElementById("altura").value,10)
    let resultado = document.getElementById('resultado')

    let imc = peso/(altura*altura)
    let mensagem = ""
    imc = imc.toFixed(1)


    if(imc <= 18){  
        mensagem = "Cuidado. Você está Abaixo do peso."

    } else if (imc <= 24.9) {
        mensagem = "Parabéns! Você está com o peso ideal."

    } else if (imc <= 29.9) {
        mensagem = "Cuidado. Você está com sobrepeso."

    } else if (imc <= 34.9) {
        mensagem = "Você tem grau de obesidade 1."

    } else if (imc <= 39.9) {
        mensagem = "Você tem grau de obesidade 2."

    } else {
        mensagem = "Você tem grau de obesidade 3."


    }

    resultado.textContent = `Seu IMC é ${imc}. ${mensagem}`

    

}

//criando um evento para o meu botao
//botaoCalcular.addEventListener('click', calculandoIMC);



