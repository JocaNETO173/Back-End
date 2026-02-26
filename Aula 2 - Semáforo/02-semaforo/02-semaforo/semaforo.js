const imgSemaforo = document.getElementById("img");
const botoes = document.getElementById("buttons");



let indiceCor = 0;
let idIntervalo = null;
/* controla o índice das cores (0, 1, 2 e depois volta para 0) */
const proximoIndice = ()=> {
    indiceCor = indiceCor < 2 ? ++indiceCor : 0;
    /* Ternário função explicada em uma linha só
    ? representa uma pergunta pra função
    ++ incrementa
    : é como falar um "se não"  */
}
/* Objeto responsável pela automatização do semáforo */

const ligar ={
    'red':()=> imgSemaforo.src='./img/vermelho.png',
    'yellow':()=> imgSemaforo.src='./img/amarelo.png',
    'green':()=> imgSemaforo.src='./img/verde.png',
    'automatic':()=> idIntervalo = setInterval(mudarCor,1500)
}
/* define uma identificação pra cada imagem e altera a imagem automaticamente */

const mudarCor = () => {
    const cores = ['red', 'yellow', 'green'];
    const cor = cores [indiceCor];
    ligar[cor]();
    proximoIndice();
}

/* modo automático */
const paraAuto = ()=>{
    clearInterval(idIntervalo);
}
/* Para o modo automático limpando a id do Intervalo */

const controlarSemaforo=(event)=>{
    paraAuto();
    ligar[event.target.id]();
}


botoes.addEventListener('click', controlarSemaforo);
/* detecta o clique no botão */