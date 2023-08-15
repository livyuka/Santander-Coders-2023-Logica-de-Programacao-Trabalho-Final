let tentativas = 6;
let listaDinamica = [];
let palavraSecretaDica;
let palavraSecretaSorteada;

const palavras = [
    {
        nome: "irlanda",
        dica: "Lugares"
    },
    {
        nome: "Equador",
        dica: "Lugares"
    },
    {
        nome: "sol",
        dica: "planeta"
    },
    {
        nome: "flores",
        dica: "jardim"
    },
    {
        nome: "luigi",
        dica: "personagem de jogo"
    },
    {
        nome: "Ada",
        dica: "melhor curso de front"
    },
    {
        nome: "java",
        dica: "terror do programador"
    },
];

function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length);
    palavraSecretaSorteada = palavras[indexPalavra].nome.toUpperCase();
    palavraSecretaDica = palavras[indexPalavra].dica.toUpperCase();
    listaDinamica = Array(palavraSecretaSorteada.length).fill("&nbsp;");
}

function montarPalavraNaTela() {
    const dica = document.getElementById("dica");
    dica.innerHTML = "DICA: " + palavraSecretaDica;

    const nome = document.getElementById("palavra-forca");
    nome.innerHTML = "";

    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        nome.innerHTML += "<div class='letras'>" + listaDinamica[i] + "</div>";
    }
}

function verificaLetraEscolhida(letra) {
    if (tentativas !== 0) {
        mudarStyleLetra("tecla-" + letra);
        validarLetra(letra);
        comparaListas();
    } else {
        console.log("Acabou suas chances");
    }
}

function mudarStyleLetra(tecla) {
    document.getElementById(tecla).style.background = "#4682B4";
    document.getElementById(tecla).style.color = "#ffff";
}

function validarLetra(letra) {
    let acertou = false;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] === letra) {
            listaDinamica[i] = letra;
            acertou = true;
        }
    }

    montarPalavraNaTela();
    
    if (!acertou) {
        console.log("errou a letra");
        tentativas--;
    }
}

function comparaListas() {
    if (palavraSecretaSorteada === listaDinamica.join("")) {
        setTimeout(() => {
            alert("Parabéns! Você acertou a palavra: " + palavraSecretaSorteada);
            resetarJogo();
        }, 500);
    }
}

function resetarJogo() {
    tentativas = 6;
    listaDinamica = [];
    criarPalavraSecreta();
    montarPalavraNaTela();
    // Resetando o estilo dos botões para o estado inicial
    const teclas = document.querySelectorAll("#teclado button");
    teclas.forEach(tecla => {
        tecla.style.background = "";
        tecla.style.color = "";
    });
}

// Iniciando o jogo.
criarPalavraSecreta();
montarPalavraNaTela();
