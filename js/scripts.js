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
/*
document.getElementById("enviar-nome").onclick = function () {

  var nome = document.getElementById("nome-usuario").value
  
  localStorage.setItem("nome",nome)
  

  document.getElementById("name-field").style.display ="none"

  document.getElementById("welcome-text").innerHTML = "Olá " + localStorage.nome + " seja bem vindo!"
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?"

  document.getElementById("welcome-area").style.display ="initial"
 

}

if(localStorage.nome){
  document.getElementById("name-field").style.display ="none"
  document.getElementById("welcome-text").innerHTML =  "Olá " + localStorage.nome + " seja bem vindo!"
  document.getElementById("not-me").innerHTML = "Não é " + localStorage.nome + "?"
  document.getElementById("welcome-area").style.display ="initial"

 

  
 
}

document.getElementById("not-me").onclick = function () {

  localStorage.removeItem("nome")
  document.getElementById("welcome-area").style.display ="none"
  document.getElementById("name-field").style.display ="initial"

}
*/
//var data_hoje= new Date();

//var data_hoje= new Date(2016,0,10);
//var data_hoje= new Date(2016,0,10, 17, 45, 10);

//var data_hoje= new Date("2020-03-18");

//var data_hoje= new Date();
//console.log(data_hoje.getDate())
/*
var data_hoje= new Date();

console.log(data_hoje.getDate())

var data_nascimento = "1980-03-01"

var ano_nascimento =  new Date("1980-03-01").getFullYear()
var ano_atual = new Date().getFullYear()
var idade = ano_atual - ano_nascimento
console.log(idade)
*/

//var data = new Date()
//console.log(data.getTime()/	31536000000)

//var data_envio = new Date("2018-03-20")
//data_envio = data_envio.getTime()
//var data_entrega = new Date("2018-04-06")
//var res = new Date((data_entrega - data_envio)/86400000)
//data_entrega = data_entrega.getTime()

//var resu = document.getElementById("dias_entrega")



//resu.innerHTML = (data_entrega-data_envio)/86400000

//metodos de tempo
/*
console.log('Mensagem1');
window.setTimeout( function(){
  console.log('Mensagem2')
}, 3000)
*/


document.getElementById("mostrar-loader").onclick = function () {

 

  document.getElementById("spinner-loader").style.display ="initial"

  window.setTimeout(function(){ document.getElementById("spinner-loader").style.display ="none"},5000)

}