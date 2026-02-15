function alerta(){
    console.log("Alerta")
}

//  aparece APOS 3 segundos

// setTimeout(alerta,3000)

// setTimeout(()=>{
//     console.log("Alerta");
    
// },3000);

//Exibe a cada 3 segundos

setInterval(()=>{
    console.log("Alerta");
    
},3000);