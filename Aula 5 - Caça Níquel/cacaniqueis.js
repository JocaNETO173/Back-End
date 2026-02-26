let imagens = ["cereja.png","limao.png","uva.png"];
const resultado = document.getElementById("resultado");
const tentativas = document.getElementById("tentativas");
let n_tentativas = 0

function jogar(){
    let sorteio1 = Math.floor(Math.random()*3);
    let sorteio2 = Math.floor(Math.random()*3);
    let sorteio3 = Math.floor(Math.random()*3);

    document.getElementById("img1").src = imagens[sorteio1];
    document.getElementById("img2").src = imagens[sorteio2];
    document.getElementById("img3").src = imagens[sorteio3];

    if(sorteio1 == sorteio2 && sorteio2 == sorteio3){
        resultado.innerHTML=("Resultado <br> Você Venceu!")
        tentativas.innerHTML("Tentativas: 0")
    } else {
        resultado.innerHTML=("Resultado <br> Tente Novamente!")
        tentativas.innerHTML=`Tentativas: ${n_tentativas+=1}`
    };
};

function resetar(){
    document.getElementById("img1").src = "slot.png";
    document.getElementById("img2").src = "slot.png";
    document.getElementById("img3").src = "slot.png";
    resultado.innerHTML=("Resultado");
    tentativas.innerHTML("Tentativas: 0");
}