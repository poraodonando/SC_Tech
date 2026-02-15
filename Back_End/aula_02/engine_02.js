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




const minha_func_assincrona = async () => {
    try{
        const resultado = await busca_dados_servidor();
        console.log(resultado)

    }

    catch(erro){
        console.erro(erro);
    }
}

minha_func_assincrona();

console.log("Final da execução")