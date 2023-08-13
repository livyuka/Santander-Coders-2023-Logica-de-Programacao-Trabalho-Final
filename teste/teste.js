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
function criarPalavraSecreta (){
    const indexPalavra= parseInt(Math.random()*palavras.length);
    //console.log(indexPalavra);

    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaDica = palavras[indexPalavra].dica;
    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaDica);

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
    if(tentativas> 0 ){
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
        
    }
}
function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background="#4682B4";
    document.getElementById(tecla).style.color="#ffff";

}
function comparaListas(letra){
    const position = palavraSecretaSorteada.indexOf(letra)
    if(position<0){
        tentativas --
        //aparecer a imagem
        //verificar tentativas > mensagem na tela 
    }else{
        for(i= 0; i< palavraSecretaSorteada.length; i++){
            if(palavraSecretaSorteada[i]== letra){
                listaDinamica[i]=letra;
            }
        }
    }
    let ganhou = true;
    for (i=0;i<palavraSecretaSorteada.length;i++){
        if (palavraSecretaSorteada[i]!= listaDinamica[i]){
            ganhou=false;
        }
    }
    if(ganhou==true){
        // mensagem na tela
        tentativas = 0;
    }
};