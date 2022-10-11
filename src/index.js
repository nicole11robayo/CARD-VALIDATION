document.getElementById("validacion").style.display="none";
document.getElementById("infoTarjeta").style.display="none";
document.getElementById("regresar").style.display="none";

document.getElementById("caja").focus();

const b4=document.getElementById("siguiente");
b4.addEventListener("click",next);

function next(){
    document.getElementById("inicio").style.display="none";
    document.getElementById("validacion").style.display="";
    document.getElementById("mensaje").style.display="none"
    document.getElementById("caja").focus();
}

const b1= document.getElementById("ayuda");
b1.addEventListener("click",help);

function help() {
    alert("Es el número ubicado en la parte frontal de tu tarjeta");
}

const b3= document.getElementById("regresar");
b3.addEventListener("click",back);

function back() {
    document.location.reload();
}

/*
let hh=document.getElementById("caja");
hh.addEventListener("keyup", (e)=>{
    console.log(e.target.value)
    let valorinput= e.target.value;
    hh.value=valorinput
    .replace(/\s/g, "")
    .replace(/([0-9]{4})/g, "$1 ")
    .trim();
}) 
*/

const b2= document.getElementById("validar");

b2.addEventListener("click",function(){
    let cardNumber= document.getElementById("caja").value
    if(cardNumber==""){
        alert("Ingrese un número");
        document.location.reload();
    }else if(validator.isValid(cardNumber)==true){
        document.getElementById("result").innerHTML="El número de tu tarjeta es válido";
        document.getElementById("validez").innerHTML= "Validez: Válido";
        document.getElementById("final").innerHTML="Ya puedes empezar a disfrutar de nuestros servicios!"
    }else if(validator.isValid(cardNumber)==false){
        document.getElementById("result").innerHTML="El número de tu tarjeta es inválido";
        document.getElementById("validez").innerHTML= "Validez: Inválido";
        document.getElementById("final").innerHTML="UPS! regresa y verifica que ingresaste bien tu número"
    }
}
);

b2.addEventListener("click", function(){
    document.getElementById("infoTarjeta").style.display="";
    document.getElementById("ingreso").style.display="none";
    document.getElementById("regresar").style.display="";
    const cardNumber= document.getElementById("caja").value;
    
    document.getElementById("tarCifrada").innerHTML= "Número: "+ validator.maskify(cardNumber);
    
}
);


b2.addEventListener("click", marca);

function marca(){
    let cardNumber= document.getElementById("caja").value;
    
    let four= cardNumber.slice(0,4);
    let three= cardNumber.slice(0,3);
    let two= cardNumber.slice(0,2);
    let one= cardNumber.slice(0,1);

    if(four=="2131"||four=="1800"||two=="31"||two=="32"||two=="33"||two=="35"||two=="39"){
        document.getElementById("franquicia").innerHTML= "Franquicia: JCB";
    }else if(four == "2014" || four == "2149"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Diner`s Club / enRoute";
    }else if(four=="6011"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Discover";
    }else if(three=="300"||three=="301"||three=="302"||three=="303"||three=="304"||three=="305"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Diner`s Club / Carte Blanche";
    }else if(two=="51"||two=="52"||two=="53"||two=="54"||two=="55"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Mastercard";
    }else if(two=="37"||two=="34"){
        document.getElementById("franquicia").innerHTML= "Franquicia: American Express";
    }else if(two=="36"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Diner`s Club / International";
    }else if(one=="4"){
        document.getElementById("franquicia").innerHTML= "Franquicia: Visa";
    }else{
        document.getElementById("franquicia").innerHTML= "Franquicia: No identificado";
    }

}




import validator from './validator.js';

console.log(validator);
