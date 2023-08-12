const palavras = [
    palavra001 = {
        palavra: 'AMPULHETA',
        dica: 'OBJETO'
    },
    palavra002 = {
        palavra: 'CADERNO',
        dica: 'OBJETO'
    },
    palavra003 = {
        palavra: 'QUADRO',
        dica: 'OBJETO'
    },
    palavra004 = {
        palavra: 'LIVRO',
        dica: 'OBJETO'
    },
    palavra005 = {
        palavra: 'CHAVE',
        dica: 'OBJETO'
    },
    palavra006 = {
        palavra: 'PANELA',
        dica: 'OBJETO'
    },
    palavra007 = {
        palavra: 'POMADA',
        dica: 'OBJETO'
    },
    palavra008 = {
        palavra: 'CANETA',
        dica: 'OBJETO'
    },
    palavra009 = {
        palavra: 'ALFINETE',
        dica: 'OBJETO'
    },
    palavra010 = {
        palavra: 'TAPETE',
        dica: 'OBJETO'
    },
    palavra011 = {
        palavra: 'AVESTRUZ',
        dica: 'ANIMAL'
    },
    palavra012 = {
        palavra: 'CALANGO',
        dica: 'ANIMAL'
    },
    palavra013 = {
        palavra: 'CROCODILO',
        dica: 'ANIMAL'
    },
    palavra014 = {
        palavra: 'ESQUILO',
        dica: 'ANIMAL'
    },
    palavra015 = {
        palavra: 'GOLFINHO',
        dica: 'ANIMAL'
    },
    palavra016 = {
        palavra: 'LONTRA',
        dica: 'ANIMAL'
    },
    palavra017 = {
        palavra: 'RINOCERONTE',
        dica: 'ANIMAL'
    },
    palavra018 = {
        palavra: 'ZEBRA',
        dica: 'ANIMAL'
    },
    palavra019 = {
        palavra: 'RAPOSA',
        dica: 'ANIMAL'
    },
    palavra020 = {
        palavra: 'GIRAFA',
        dica: 'ANIMAL'
    },
]

let palavraSorteada;
let palavraDica;
sortearPalavra()
function sortearPalavra(){
    const indicePalavra = Math.floor(Math.random() * palavras.length);

    palavraSorteada = palavras[indicePalavra].palavra;
    palavraDica = palavras[indicePalavra].dica;
}