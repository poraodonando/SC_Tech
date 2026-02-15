const carros = ["Ferrari","Rolls Roice", "Uno","Fusca","Kombi","Porche"];

let conteudo = document.getElementById("conteudo");
var dados ;
var i = 0;

function cria_secao(titulo, dados_func){
    // Cria elemento HTML em JAvaScript
    let secao = document.createElement("div"); 
    secao.innerHTML = "<h2>"+ titulo+ "</h2>" + dados_func;

    conteudo.appendChild(secao)
}


dados ="";
i = 0

while(i <= carros.length ){
    
    // console.log(carros[i])

    dados += "<p>"+carros[i]+"</p>"

    conteudo
    i++;
}

cria_secao("Código mais melhorado", dados);

dados = ""
i = 0; 

do{
     dados += "<p>"+carros[i]+"</p>"

     i++;

}while(i < carros.length)


    cria_secao("Ideração com DO",dados);

dados = "";


for(i = 0; i< carros.length; i++){
        dados += "<p>"+carros[i]+"</p>"

}

    cria_secao("Iteração FOR", dados)


dados = "";

for (let car of carros) {
      dados += "<p>"+car+"</p>"
}

cria_secao("Iteração FOR OF", dados);


let car_1 = {
    
    marca:"Ford",
    ano: 2024,
    modelo:"ka"
    
}

let car_2 = {
    
    marca:"Fiat",
    ano: 2018,
    modelo:"Uno"
    
}


for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}