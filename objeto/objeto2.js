let carro = {
    marca: "Toyota",
    modelo: "Corola",
    ano: 2020,
    ligar : function(){
        console.log('O Carro ligou! ');
    },
    mostrarInfo: function (){
        console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}`);
    }
}

carro.ligar();
carro.mostrarInfo();