const carros = ["Ferrari","Rolls Roice", "Uno","Fusca","Kombi","Porche"];

let conteudo = document.getElementById("conteudo");

let dados = "";
let i = 0;

while(i <= carros.length ){
    
    // console.log(carros[i])

    dados += "<p>"+carros[i]+"</p>"

    conteudo
    i++;
}
// Cria elemento HTML em JAvaScript
const secao = document.createElement("div"); 
secao.innerHTML = "<h2>Condição While </h2>" + dados;

conteudo.appendChild(secao)

