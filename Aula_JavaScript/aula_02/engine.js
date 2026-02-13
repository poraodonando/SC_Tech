function verifcaApr(){

    let nota = document.getElementById("nota").value;
    console.log("Nota inserida ", nota )

    if(nota >= 7){
        document.getElementById("resultado").innerHTML = "Estudante aprovado"
        alert("Estudante aprovado")

    }else{
        document.getElementById("resultado").innerHTML = "Estudante reprovado"
        
        alert("Estudante reprovado")
        
    }

    console.log(nota);   
}



