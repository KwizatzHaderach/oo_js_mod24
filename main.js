function Veiculo (marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;

    this.acelera = function(){
        console.log(`${this.marca} ${this.modelo} acelerando.` ); 
    }
    this.freia= function(){
        console.log(`${this.marca} ${this.modelo} freando.`);
    } 
}

function Carro(marca, modelo, cor){
    this.cor = cor;

    Veiculo.call(this, marca, modelo)
}

function Moto(marca, modelo, cilindrada) {
    this.cilindrada = cilindrada;

    Veiculo.call(this, marca, modelo)
}

function Bicicleta(marca, modelo, peso) {
    this.peso = peso;

    Veiculo.call(this, marca, modelo)
}

const carro = new Carro("Honda", "Civic", "branco");
const moto = new Moto("Yamaha", "Fazer", "250");
const bike = new Bicicleta("Caloi", "Mountain-bike", "150g");


carro.acelera();
moto.freia();
bike.acelera();

