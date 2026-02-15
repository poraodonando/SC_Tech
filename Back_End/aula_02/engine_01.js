console.log("Inicio da execução")

function busca_dados_servidor(){
    //CODIGO QUE BUSCA DADOS DO SERVIDOR    
    return new Promise((resolve, reject) =>{
        console.log("Buscando dados no servidor...");
        
        setTimeout(() =>{
            let sucesso = Math.random() > 0.5;
            if(sucesso){
                resolve("Dados recebidos com Sucesso!!!");
            }else{
                reject("Falha ao buscar dados do servidor");
            }
        },2000)
    })
}

busca_dados_servidor().then((mensagem) => console.log(mensagem)).catch((erro) =>{
    console.log(erro)
});

console.log("Final da execução")