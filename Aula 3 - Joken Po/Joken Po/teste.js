const pedra = document.getElementById('pedra');
const papel = document.getElementById('papel');
const tesoura = document.getElementById('tesoura');
const radio = document.getElementsByTagName('input');

let pc = ['./pcpedra.png','./pcpapel.png','./pctesoura.png']
let mao = [pedra.checked, papel.checked, tesoura.checked]



function jogar(){

    if(pedra.checked == false && papel.checked == false && tesoura.checked == false){
        alert("Selecione uma opção")
    } else {
        let sorteio = Math.floor(Math.random()*3);
        
        document.getElementById('pc').src = pc[sorteio];

        for(let i = 0; i < mao.length; i++){
            console.log(mao[i])
        }
        

    }
}