function validate_form(){

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value
    
    if(name === "" || email === "" || message === ""){
        alert("Todos od campos são obrigatórios");
        return false
    }
    
    if(name.length < 3 || name.length > 50 ){
        alert("O nome deve ter entre 3 e 50 caracteres")
        return false
    }
    
    if(email.length < 5 || email > 50 ){
        alert("O EMAIL deve ter entre 5 e 50 caracteres")
        return false
    }
}

document.getElementById('contactForm').addEventListener("submit", function(event){
    event.preventDefault();
    if(validate_form()){
        alert("Formulário validado")
    }
})