//pegando o botao do htm
//let botaoCalcular = document.getElementById('btnCalcular').onclick = calculandoIMC();


function calculandoIMC () {
    //pegando o VALOR do peso e da altura do html
    let peso = parseInt(document.getElementById("peso").value, 10)
    let altura = parseFloat(document.getElementById("altura").value,10)
    let resultado = document.getElementById('resultado')

    let imc = peso/(altura*altura)


    resultado.textContent = `Seu IMC é ${imc}`

    

}

//criando um evento para o meu botao
//botaoCalcular.addEventListener('click', calculandoIMC);



