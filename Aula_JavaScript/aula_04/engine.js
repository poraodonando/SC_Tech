function calcular(){

    let num1 = parseFloat( document.getElementById("num-1").value)
    let num2 = parseFloat(document.getElementById("num-2").value);
    let operador = document.getElementById("operador").value;
    let resultado

    switch(operador){
        case "+":
            resultado = num1 + num2;
            break
        case "-":
            resultado =  num1 - num2;
            break
        case "*":
            resultado = num1 * num2;
            break
        case "/":
            if(num2 == 0){
                resultado = 0
            }else{

                resultado = num1/num2;
            }
            break
        default:
            resultado = "Operador nao identificado"
            break
    }

    document.getElementById("resultado").innerHTML = "A resposta é: " + resultado
    alert("O resultado é: " +resultado);
}



// function calcular_1(){
//     let num1 = document.getElementById("num-1").value
//     let num2 = document.getElementById("num-2").value

//     let operador = document.getElementById("operador").value

//     res = "O resultado é: " + num1 + operador + num2
//     alert(res)
// }