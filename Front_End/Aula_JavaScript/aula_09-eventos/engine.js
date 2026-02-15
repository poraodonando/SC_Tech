
function set_Background_collor(color){
    document.body.style.backgroundColor = color
}




document.getElementById("redButton").addEventListener('click',function(){set_Background_collor("red")})
document.getElementById("greenButton").addEventListener('click',function(){set_Background_collor("green")})
document.getElementById("blueButton").addEventListener('click',function(){set_Background_collor("blue")})

document.getElementById('inputBox').addEventListener('keypress',function(event){
    alert("A tecla pressionada: "+ event.key)
});