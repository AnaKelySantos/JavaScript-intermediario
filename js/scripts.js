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
/*

document.getElementById("mostrar-loader").onclick = function () {

 

  document.getElementById("spinner-loader").style.display ="initial"

  window.setTimeout(function(){ document.getElementById("spinner-loader").style.display ="none"},5000)

}
*/
/*
var count = 0
window.setInterval(function(){
  console.log(count)
  count++
},1000)*/

//aula 4 10.07
/*
var count = 0
var inter = window.setInterval(function(){
  console.log(count)
  count++

  if(count>=10){

    window.clearInterval(inter)
  }

},1000)
*/

//desafio
/*

var relogio = new Date()



relogio1 = relogio.getHours()

relogio2 = relogio.getMinutes()

relogio3 = relogio.getSeconds()

document.getElementById("relogio").innerHTML = relogio1.toString() +":"+relogio2.toString()+":"+relogio3.toString()




window.setInterval(function(){

  var relogio = new Date()



  relogio1 = relogio.getHours()
  
  relogio2 = relogio.getMinutes()
  
  relogio3 = relogio.getSeconds()

  function format_time(time){

    if(time >= 0 && time<= 9){

      var format_time = time.toString()
      format_time = "0"+format_time

    }else{
      var format_time = time.toString()
    }
    return format_time
  }
  
  document.getElementById("relogio").innerHTML = format_time(relogio1) +":"+ format_time(relogio2) +":"+ format_time(relogio3)   

},1000)
*/
/*
function valor_pedagio(categoria){

switch(categoria){

  case '1':
    return 11.22
    break
    case '2':
    return 22.45
    break

    case '3':
    return 16.88

    case '4':
      break
    return 36.65
    break

    default:

    return 'categoria não encontrada'

    


}

}

var categoria_veiculo = "7"

console.log(valor_pedagio(categoria_veiculo))

var categoria_veiculo = "1"

console.log(valor_pedagio(categoria_veiculo))

*/
/*
var x = 0

while (x<10){
  console.log(x)
  x++

  if(x==5){
    break
  }
}
*/
/*
var lista =[1,5,9,33,56,89,10,122,145,189,190,199,205,290]

for (a = 0; a < lista.length; a++){

if(lista[a]==33){
  console.log('valor encontrado '+ a)
  break
}
console.log('tentativa: ' + a)

} 
*/
//se eu tivesse uma lista maior eu poderia ordenar color um numero mair do que eu quero fora e menos fora
/*
var num = 0
while (num<20) {

if (num == 3) {
  num++
  continue
  
}

  console.log(num)
  num++

  
}
*/
/*
var num = 0
while (num<20) {

if (num%2 == 0) {
  num++
  continue
  
}

  console.log(num)
  num++

  
}
*/
/*

var num = 0

while (num<20) {

if (num%2 != 0) {
  num++
  continue
  
}

  console.log(num)
  num++

  
}
*/

//document.getElementById("mostrar_opcao").onclick = function () {
  //var campo_select = document.getElementById("options")
  //var indice_selecionado = campo_select.options.selectedIndex
  //console.log(indice_selecionado)
  //var valor_selecionado = campo_select.options[indice_selecionado].innerHTML
  //document.getElementById("opcao_selecionada").innerHTML =valor_selecionado

  //var indice_selecionado = document.getElementById("options").value
 // document.getElementById("opcao_selecionada").innerHTML =indice_selecionado

//document.getElementById("options").value ="opt3"

//radius buttons 

 
//}

//document.getElementById("mostrar_radio").onclick =function () {

 // var radio = document.getElementsByName("genero")

  //var radio_selected;

  //for (var a = 0; a < radio.length; a++) {
   // if(radio[a].checked){
   //     radio_selected = radio[a].value
  //      break
 //   }

  //}

  //document.getElementById("radio_selecionado").innerHTML =radio_selected
  
//}

//document.getElementById("mostrar_check").onclick = function () {

//  document.getElementById("check_selecionado").innerHTML =""
 // var check = document.getElementsByName("interesse")

  //for (var b = 0; b < check.length; b++) {
   /// if (check[b].checked){

      //document.getElementById("check_selecionado").innerHTML +='<li>' + check[b].value + '</li>'
      
    //}
   
 //}


//};

//document.getElementById("mostrar_data").onclick = function () {

  //var data_select = document.getElementById('data_evento').value
  //console.log(data_select)
//var data_completa = new Date(data_select)
//document.getElementById("data_selecionada").innerHTML = data_completa

//};



//document.getElementById("escolaridade").onchange = function () {

  //var campo_select = document.getElementById("escolaridade");
  //var indice_selecionado = campo_select.options.selectedIndex;
  //var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
  //document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;

//};


//var check = document.getElementsByName("lanche");

//for (var a = 0;  a < check.length; a++) {

  //  check[a].onchange = function () {

    //    document.getElementById("check_selecionado").innerHTML = "";
        
      //  for (var b = 0;  b < check.length; b++) {
            
        //    if (check[b].checked) {
          //      document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
           // }
        //}
    //}  
//}
//document.getElementById("exemplo").innerHTML="oi"

//$("#exemplo").html("olá");

//$("#esconder").click(function() {
 // $(".exemplo").css("display", "none")
//})


$("#esconder").click(function() {
 $(".exemplo").hide()
})
//$("*").hide()
//$("div.exemplo").hide()
//$("p:first").hide()
//$("ul li.first-child").hide()
//$("[href]").hide()
//$("a[target='_blank']").hide()
//$("a[target!='_blank']").hide()
//$(":button").hide()
//$("tr:even").hide()
//$(":tr:odd").hide()

//var conteudo_html = $("#paragrafo-html").text()
//var conteudo_html = $("#paragrafo-html").html()

//console.log(conteudo_html)

//$("#paragrafo-html").html("mudei")
//var conteudo_html = $("#paragrafo-html").html()
//console.log(conteudo_html)
var url_link = $("#paragrafo-link").attr("href")
console.log(url_link)
$("#paragrafo-link").attr("href","http://servidores.rhbahia.ba.gov.br/premio-de-boas-praticas")
var url_link = $("#paragrafo-link").attr("href")
console.log(url_link)