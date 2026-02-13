function mostra_saudacao(){
    let nome = document.getElementById("nome").value
    let hora = parseInt(document.getElementById("hora").value,10)
    let mensagem = document.getElementById("mensagem")

    mensagem.innerHTML =  saudacao_peronalizada(nome, hora)
    
    
}

function saudacao_peronalizada(nome, hora){
    if(hora < 12){
        return "Bom dia, " + nome + "!"
    }else if(hora > 12 && hora < 18){
        return "Boa Tarde, " + nome + "!"
    }else if(hora > 18) {
        return "Boa Noite, " + nome + "!"
    }
    mensagem.innerHTML()
}
