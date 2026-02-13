const calcular = document.getElementById('calcular');
function DensidadeDemo(){

const lugar = document.getElementById('lugar').value;
const area = document.getElementById('area').value;
const habitantes = document.getElementById ('habitantes').value;
const resultado = document.getElementById('resultado');



if (lugar !=='' && habitantes !=='' && area !==''){

    const densidadeDemo = (habitantes/area);

    let classificacao = '';
    if(densidadeDemo <= 15.0){
        classificacao = 'Muito Baixa';
    } else if (densidadeDemo <= 50.0){
        classificacao = 'Baixa';
    } else if (densidadeDemo <= 150.0){
        classificacao = 'Média';
    } else if (densidadeDemo <= 350.0){
        classificacao = 'Alta';
    } else if (densidadeDemo > 350.0){
        classificacao = 'Muito Alta';
    } else {
        classificacao = 'Atenção';
    }
    resultado.textContent = `A densidade demográfica de ${lugar} é ${densidadeDemo} e é considerada ${classificacao}`;

} else {
    resultado.textContent = 'Preencha todos os campos!';
}
}
calcular.addEventListener('click', DensidadeDemo);