const img = document.getElementById('img');
const seletor = document.getElementById('seletor');
const titulo = document.getElementById('titulo');

let colorIndex = 0;
let intervalId = null;

const nextIndex = () => {
    colorIndex = colorIndex < 6 ? ++colorIndex : 0;
}

const atualizarPagina = (cor, nomePt, colorText) => {
    img.src = `./img/${cor}.png`;
    titulo.innerText = `Esta é uma sala ${nomePt}!`;
    titulo.style.color = colorText;
};

const turnOn = {
    default: () => {
        img.src = './img/default.jpg';
        titulo.innerHTML = 'Este é o selecionador das salas da mansão de Mt. Holly. <br> Selecione uma cor.'
        titulo.style.color = 'white';
    },
    blue: () => atualizarPagina('blue', 'azul', '#005a8d'),
    red: () => atualizarPagina('red', 'vermelha', '#8b0100'),
    orange: () => atualizarPagina('orange', 'laranja', '#894f1e'),
    yellow: () => atualizarPagina('yellow', 'amarela', '#a49b58'),
    violet: () => atualizarPagina('violet', 'violeta', '#523752'),
    green: () => atualizarPagina('green', 'verde', '#276331'),
    black: () => {
        img.src = './img/black.png';
        titulo.innerText = 'Esta é uma sala preta!';
        titulo.style.color = 'black';
        titulo.style.webkitTextStrokeWidth = '0.5px';
        titulo.style.webkitTextStrokeColor = 'white';
    },

    automatic: () => intervalId = setInterval(changeColor, 500)
}

const changeColor = () => {
    const colors = ['blue', 'red', 'orange', 'yellow', 'violet', 'green', 'black']
    const color = colors[colorIndex]
    turnOn[color]();
    nextIndex();
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}

const rooms = (event) => {

    stopAutomatic();

    const selected = event.target.value;

    if (selected) {
        turnOn[selected]();
    }
}

seletor.addEventListener('change', rooms);