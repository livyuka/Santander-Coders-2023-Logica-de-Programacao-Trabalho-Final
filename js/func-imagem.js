// Dentro da função 3 (compararLista)
function imagemMario() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('./img/mario-02.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('./img/mario-03.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('./img/mario-04.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('./img/mario-05.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('./img/mario-06.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('./img/mario-07.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('./img/mario-01.png')";
            break;
    }
}