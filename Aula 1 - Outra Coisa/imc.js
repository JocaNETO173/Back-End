const calcular = document.getElementById('calcular');
function IMC(){

const nome = document.getElementById('nome').value;
const peso = document.getElementById('peso').value;
const altura = document.getElementById ('altura').value;
const resultado = document.getElementById('resultado');



if (nome !=='' && altura !=='' && peso !==''){

    const valorIMC = (peso/(altura*altura)).toFixed(1);

    let classificacao = '';
    if(valorIMC < 18.5){
        classificacao = 'Abaixo do Peso';
    } else if (valorIMC < 25.0){
        classificacao = 'Peso Normal';
    } else if (valorIMC < 30.0){
        classificacao = 'Sobrepeso';
    } else if (valorIMC < 35.0){
        classificacao = 'Obesidade Grau I';
    } else if (valorIMC < 40.0){
        classificacao = 'Obesidade Grau II';
    } else if (valorIMC > 40.1){
        classificacao = 'Obesidade Grau III';
    } else {
        classificacao = 'Atenção';
    }
    resultado.textContent = `${nome}, Seu IMC é ${valorIMC} e você está com ${classificacao}`;

} else {
    resultado.textContent = 'Preencha todos os campos!';
}
}
calcular.addEventListener('click', IMC);