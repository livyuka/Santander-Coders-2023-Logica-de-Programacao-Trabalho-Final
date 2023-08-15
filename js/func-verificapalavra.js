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
// Iniciando o jogo.
criarPalavraSecreta();
montarPalavraNaTela();
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
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        validarLetra(letra);
        montarPalavraNaTela();
        comparaListas();
    } else {
        setTimeout(() => {
            alert(`Acabaram suas chances! A palavra era: ${palavraSecretaSorteada}.`);
        }, 100);
    }
}

function mudarStyleLetra(tecla,verificarLetra) {
    if(verificarLetra == false) {
        document.getElementById(tecla).style.background = "#d5d5d5";
        document.getElementById(tecla).style.color = "#ffff";
    }else{
        document.getElementById(tecla).style.background = "#4682B4";
        document.getElementById(tecla).style.color = "#ffff";
    }
}

function validarLetra(letra) {
    let acertou = false;
    for (let i = 0; i < palavraSecretaSorteada.length; i++) {
        if (palavraSecretaSorteada[i] === letra) {
            listaDinamica[i] = letra;
            acertou = true;
            mudarStyleLetra("tecla-" + letra, true);
        }
    }
    if (!acertou) {
        console.log('Tentativas: ' + tentativas);
        tentativas--;
        console.log('Tentativas: ' + tentativas);
        if (tentativas === 0) {
            setTimeout(() => {
            alert(`Acabaram suas chances! A palavra era: ${palavraSecretaSorteada}`);
        }, 100);
            animarBtnReiniciar();
            // document.getElementById("tecla-reload").animate(
            //     [{transform: 'scale(1)'},
            //     {transform: 'scale(1.2)'}
            //     ],
            //     {duration: 900,
            //     iterations: Infinity,
            //     direction: 'alternate'
            //     }
            // )
        }
        imagemMario();
    }
}

function comparaListas() {
    if (palavraSecretaSorteada === listaDinamica.join("")) {
        setTimeout(() => {
            alert("Parabéns! Você acertou a palavra: " + palavraSecretaSorteada);
        }, 100);
        animarBtnReiniciar();
        // document.getElementById("tecla-reload").animate(
        //     [{transform: 'scale(1)'},
        //     {transform: 'scale(1.2)'}
        //     ],
        //     {duration: 900,
        //     iterations: Infinity,
        //     direction: 'alternate'
        //     }
        // )
    }
}

function imagemMario() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-02.png')";
            break;
        case 4:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-03.png')";
            break;
        case 3:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-04.png')";
            break;
        case 2:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-05.png')";
            break;
        case 1:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-06.png')";
            break;
        case 0:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-07.png')";
            break;
        default:
            document.getElementById("imagem").style.backgroundImage = "url('../img/mario-01.png')";
            break;
    }
}

function animarBtnReiniciar() {
    document.getElementById("tecla-reload").style.backgroundColor = '#89bae2'
    document.getElementById("tecla-reload").animate(
        [{transform: 'scale(1)'},
        {transform: 'scale(1.2)'}
        ],
        {duration: 900,
        iterations: Infinity,
        direction: 'alternate'
        }
    )
}

const reiniciar = document.getElementById("tecla-reload");
reiniciar.addEventListener("click", function() {
    location.reload();
});


