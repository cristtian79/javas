alert("Exito");
function lol(){
    document.getElementById('uno').style.display='none';
    document.getElementById('dos').style.display='none';
}

lol();
function segrado(op){
   
    var a = parseInt(document.getElementById("val_a").value);
    var b = parseInt(document.getElementById("val_b").value);var c = parseInt(document.getElementById("val_c").value); 
    
     var ops = {
        sumar: function sumarNumeros() {
            return (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
        },
     sumar2: function sumarNumeros2() {
            return (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
        }}
    
  
    switch(op) {
            case 'sumar':
            var resultado = ops.sumar();
          var resultado2 = ops.sumar2();
            if(resultado > 0){
                 document.getElementById("label").innerHTML= resultado ;
                 document.getElementById("label2").innerHTML= resultado2 ;
            }
            else{
                alert("No tiene solucion Real");
            }
                break;
}}


function ocultar_1(){
document.getElementById('uno').style.display='block';
   document.getElementById('dos').style.display='none';
}

function ocultar_2(){
document.getElementById('dos').style.display='block';
    document.getElementById('uno').style.display='none';
}

function area(){
     var area = parseInt(document.getElementById("area").value);
    
    var res = Math.PI*(Math.pow(area,2));
    
    alert( res );
    
    document.getElementById("label3").innerHTML= res ;
}

function radio(){
    var radio = parseInt(document.getElementById("radio").value);
     var res = 2*(Math.PI*radio);
    document.getElementById("label4").innerHTML= res ;
}
