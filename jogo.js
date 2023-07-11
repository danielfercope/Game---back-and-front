var numeroSecreto = parseInt(Math.random() * 101);
var contagem = 10;
var numTentativas = document.getElementById("tentativas");

numTentativas.innerHTML = parseInt(contagem);

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var chute = parseInt(document.getElementById("valor").value);

    if (contagem > 1) {
        contagem--;
        if (chute == numeroSecreto) {
            elementoResultado.innerHTML = "Você acertou";
            var nome = prompt("Digite o seu nome:");
        } else if (chute > 100 || chute < 0) {
            elementoResultado.innerHTML = "Você deve digitar um número de 0 a 100";
        } else if (numeroSecreto > chute) {
            elementoResultado.innerHTML = "Você errou, o número é maior que seu chute";
        } else {
            elementoResultado.innerHTML = "Você errou, o número é menor que seu chute";
        }
    } else {
        contagem = 0;
        elementoResultado.innerHTML = "Infelizmente acabou suas tentativas, o número era:  " + parseInt(numeroSecreto);
    }
    numTentativas.innerHTML = parseInt(contagem);
}

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            const btn = document.querySelector(Chutar());
            btn.click();
        }
    })

    function Recarregar() {
        window.location.reload();
    }