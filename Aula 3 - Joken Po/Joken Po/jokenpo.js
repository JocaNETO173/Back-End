const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');

function jogar(){

    if(pedra.checked == false && papel.checked == false && tesoura.checked == false){ /* se nenhum dos radio estão selecionados ele dará o sinal de falso e emitirá um alerta e não vai dar nada */
        alert("Selecione uma opção")
    } else { /* caso esteja selecionado um deles execute tudo isso */
        let sorteio = Math.floor(Math.random()*3); /* gera um número aleatório entre 0 e 2 menor que 3*/
        
        switch(sorteio){ /* caixa para trocas */

            case 0: /*caso tal valor for verdadeira, executar o que está dentro do caso */
                document.getElementById('pc').src="pcpedra.png";
                break;
            case 1:
                document.getElementById('pc').src="pcpapel.png";
                break;
            case 2:
                document.getElementById('pc').src="pctesoura.png";
                break;
        }
        
        if((pedra.checked == true && sorteio == 0 )||(papel.checked == true && sorteio == 1)||(tesoura.checked == true && sorteio == 2)){
            document.getElementById('placar').innerHTML="placar: Empate!";
        }
        else if ((pedra.checked == true && sorteio == 2)||(papel.checked == true && sorteio == 0)||(tesoura.checked == true && sorteio == 1)){
            document.getElementById('placar').innerHTML="placar: Você Venceu!"
        } 
        else {
            document.getElementById('placar').innerHTML="placar: Computador Venceu!";
        }

    }
}

function resetar(){
    document.getElementById('placar').innerHTML="placar";
    document.getElementById('pc').src="pc.png";
}
