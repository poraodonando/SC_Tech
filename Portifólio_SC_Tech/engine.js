
// const celulas = document.getElementById('celula')
const celulas = document.querySelectorAll('.celula')

let vezDo_X = true;

document.getElementById("reinicia").addEventListener('click',iniciar_jogo)

function iniciar_jogo(){
    celulas.forEach(celula => {
        celula.textContent = "";
        celula.addEventListener("click", tratar_click,{once:true})
    })
}

function tratar_click(evento){
    evento.target.textContent = vezDo_X ? "X":"O";
    vezDo_X = !vezDo_X;
}

iniciar_jogo();