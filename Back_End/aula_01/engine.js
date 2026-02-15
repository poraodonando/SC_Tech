class Veiculo{
     constructor(fabricante, modelo, ano){
      
        this.fabricante = fabricante;
        this.modelo = modelo;
        this.ano = ano;
       
    }
    mostra_dados_veiculo(){
    console.log(` ${this.fabricante} ${this.modelo}, ${this.ano} ${this.tipo},  ${this.portas} portas`);
    }
    

    mostra_modelo(){
        console.log(`O modelo do carro é ${this.modelo}`)
    }

    acelerar(){
        console.log("Acelerando!!!");
    }
}

class Carro extends Veiculo{

    constructor(fabricante, modelo, ano, tipo,portas){
      
        super(fabricante,modelo,ano,tipo,portas)

    }

}


class Moto extends Veiculo{
    constructor(fabricante, modelo, ano, cilindradas){
        super(fabricante,modelo,ano);       
        this.cilindradas = cilindradas
    }

    
mostra_dados_veiculo(){
    console.log(`${this.fabricante} ${this.modelo}, ${this.ano} - ${this.cilindradas} cilindradas`)
}
}

const new_carro_01 = new Carro("kombi",'fiat',2024,"uno",4);
const new_carro_02 = new Carro("Toyota");




new_carro_01.mostra_dados_veiculo();
new_carro_02.mostra_dados_veiculo();

new_carro_01.mostra_modelo()
new_carro_01.acelerar()

const new_moto_01 = new Moto("Yamaha", "PY", 2018,175)
new_moto_01.mostra_dados_veiculo()

// let array_01 = [1,2,3,4,5];