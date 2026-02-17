var pessoa = require("./commons/pessoa");
var soma = require("./commons/soma");
var imposto = require("./commons/calculo_imposto");

nando = pessoa()

console.log(JSON.stringify(nando));
console.log(soma(2+3))
console.log("Com imposto: "+ imposto.adicionar(10))
console.log("Valor imposto: "+ imposto.valor(10))
console.log("TAXA: "+ imposto.taxa)

