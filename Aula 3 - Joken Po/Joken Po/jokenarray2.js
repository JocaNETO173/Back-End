

function jogar(){

    const opcoes = ['pedra','papel','tesoura'];
    const imagensPC=['pcpedra.png','pcpapel.png','pctesoura.png'];
    
    let escolhaJogador = -1;

    for(let i = 0; i<opcoes.length; i++){
        if(document.getElementById(opcoes[i]).checked){
            escolhaJogador = i;
        }
    }
    if(escolhaJogador === -1){
        alert('Selecione uma opção')
        return;
    }

    let sorteio = Math.floor(Math.random()*3);
    document.getElementById('pc').src = imagensPC[sorteio]
    let resultado = (escolhaJogador - sorteio +3)%3;

    const mensagens =["EMPATE","Você venceu!","Computador venceu!"]
    document.getElementById("placar").innerHTML=mensagens[resultado]
}

function resetar(){
    document.getElementById('pc').src = 'pc.png';
    document.getElementById('placar').innerHTML='';
}