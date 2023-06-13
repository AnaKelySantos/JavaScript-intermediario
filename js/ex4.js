document.getElementById("estados").onchange = function(){
    localStorage.setItem("estado", document.getElementById("estados").value)
}

if(localStorage.estado){
    document.getElementById("estados").value = localStorage.estado
}

function add_left_zero(number){
    if(number<10){
    return "0"+ number.toString()
}else{
    return number.toString()
}
}

function format_date(timestamp){
    var dia = add_left_zero(new Date(timestamp).getDate())
    var mes = add_left_zero(new Date(timestamp).getMonth()+1)
    var ano = add_left_zero(new Date(timestamp).getFullYear())
 return dia + "-" +mes+"-"+ano
}

document.getElementById("confirmar_pedido").onclick = function(){
    var selection = document.getElementById("envios").value
    if(selection == "escolha"){

        window.alert("escolha uma opção!")
        
    }

    if (selection == "normal") {
        
        var dias_entrega = 18
    }

    if (selection == "express") {
        var dias_entrega = 12
    }
    
    var data_envio = new Date().getTime()
    var data_entrega = data_envio + (dias_entrega * 86400000)

    if (selection != "escolha") {
        document.getElementById("data_pedido").innerHTML = format_date(data_envio)
        document.getElementById("data_entrega").innerHTML = format_date(data_entrega)    
    }

    
}



   // var hora = new Date().getHours()
   // var minutos = new Date().getMinutes()
   // var segundos = new Date().getSeconds()
   // var milesegundos = new Date().getMilliseconds()
    //document.getElementById("cronometro").innerHTML = hora+":" + minutos+":"+ segundos+":"+milesegundos
//
//window.setInterval(function(){

    //var hora = new Date()
   
    //hora1 = hora.getHours()
    
    // = hora.getMinutes()
    
   // hora3 = hora.getSeconds()

   // hora4 = hora.getMilliseconds()

    //function format_time(time){
  
      //if(time >= 0 && time<= 9){
  
      //  var format_time = time.toString()
       // format_time = "0"+format_time
  
      //}else{
       // var format_time = time.toString()
      //}
     // return format_time
   // }
    
    //document.getElementById("cronometro").innerHTML = format_time(hora1) +":"+ format_time(hora2) +":"+ format_time(hora3)+":"+format_time(hora4)   
  
  //},1000)

  
  
 

  var iniciado = false

var hora_start, init_crono, hora_at, temp_p


document.getElementById("comecar_parar").onclick = function(){

if (!iniciado) {

    iniciado = true
    document.getElementById("comecar_parar").innerHTML = "parar"
if (!hora_start) {
    hora_start = new Date().getTime()
} else {
    hora_start = new Date().getTime() - temp_p
}
   


    init_crono = window.setInterval(function(){


        
hora_at = new Date().getTime()
temp_p = hora_at - hora_start





document.getElementById("cronometro").innerHTML =  (temp_p/3600000).toFixed(0) + ":" + (temp_p/60000).toFixed(0) + ":" + (temp_p/1000).toFixed(0) + ":" + (temp_p)

    }, 10)



}else{
    window.clearInterval(init_crono)
    iniciado = false
    document.getElementById("comecar_parar").innerHTML = "começar"


}


}

document.getElementById("zerar").onclick = function (){
temp_p = 0
hora_start = new Date().getTime()

//var hora_cro


document.getElementById("cronometro").innerHTML = temp_p 
}
 

//minu_cro
//segun_cro
