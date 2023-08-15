let tentativas= 6;
let listaDinamica = [];
let palavraSecretaDica;
let palavraSecretaSorteada;
const palavras = [
    palavra001 = {
        nome: "irlanda",
        dica : "Lugares"
    },
    palavra002= {
        nome : "Equador",
        dica : "Lugares"
    },
    palavra003 = {
        nome: "sol",
        dica : "planeta"
    },
    palavra004= {
        nome : "flores",
        dica : "jardim"
    },
    palavra005= {
        nome : "luigi",
        dica : "personagem de jogo"
    },
    palavra006= {
        nome : "Ada",
        dica : "melhor curso de front"
    },
    palavra007= {
        nome : "java",
        dica : "terror do programador"
    },
]

criarPalavraSecreta();


// coloquei tudo para caixa alta pois a palvra que vem do teclado dinamico do html está em caixa alta
function criarPalavraSecreta (){
    const indexPalavra= parseInt(Math.random()*palavras.length);
    //console.log(indexPalavra);
    palavraSecretaSorteada = palavras[indexPalavra].nome.toUpperCase(); // todo 
    palavraSecretaDica = palavras[indexPalavra].dica.toUpperCase(); // todo
}
montarPalavraNaTela();
function montarPalavraNaTela(){
    const dica= document.getElementById("dica"); // categoria
    dica.innerHTML=palavraSecretaDica;

    const nome= document.getElementById("palavra-forca"); // palavraTela
    nome.innerHTML= "";

    for(i=0;i<palavraSecretaSorteada.length; i++){
        if(listaDinamica[i]== undefined){
            listaDinamica[i]= "&nbsp;"
            nome.innerHTML= nome.innerHTML + " <div class='letras'>" + listaDinamica[i] + "</div>"
        }else{
            nome.innerHTML= nome.innerHTML + " <div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}


function verificaLetraEscolhida(letra){
    if(tentativas != 0 ){ // todo
        console.log("Entrou no if")
        mudarStyleLetra("tecla-" + letra);
        validarLetra(letra); // todo
    }
    else {
        console.log("Acabou suas chances") // todo
    }
}
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#4682B4";
    document.getElementById(tecla).style.color="#ffff";

}

// Quebrar em uma função onde so verifica se a letra informada existe na letra sorteada
function validarLetra(letra) {
    console.log(palavraSecretaSorteada)
    console.log(letra)
    console.log(palavraSecretaSorteada.toUpperCase().includes(letra));
    console.log(palavraSecretaSorteada.indexOf(letra))
    if(palavraSecretaSorteada.includes(letra)){
        console.log("Acertou a letra")
    }else{
        console.log("errou a letra")
        tentativas--;
    }
}

function comparaListas(letra){
    

    let ganhou = true;
    
    for (i=0;i<palavraSecretaSorteada.length;i++){
        if (palavraSecretaSorteada[i]!= listaDinamica[i]){
            ganhou=false;
        }
    }
    if(ganhou==true){
        // mensagem na tela
        tentativas=0;
    }
};