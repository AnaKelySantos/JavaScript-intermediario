//window.onmousemove = function(e){
  //  if (e.pageY<4 && e.pageX<322) {
    //    window.alert('pareeee')
    //}
//}
//colocar na agenda de laravel

//localstorage

//window.localStorage.setItem("nome", "jõao");
//console.log(localStorage['nome']);
//localStorage.removeItem("nome")

document.getElementById("enviar-nome").onclick = function () {

  var nome = document.getElementById("nome-usuario").value
  
  localStorage.setItem("nome",nome)
  

  document.getElementById("name-field").style.display ="none"

  document.getElementById("welcome-text").innerHTML = "Olá " + nome + " seja bem vindo!"
  document.getElementById("not-me").innerHTML = "Não é " + nome + "?"

  document.getElementById("welcome-area").style.display ="initial"
 
  
  
  


}