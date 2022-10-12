const validator = {
    isValid: function(creditNumber){
  
        //separar en digitos el numero y ponerlo al reves(string)(array)
        let sepRev= creditNumber.split('').reverse();

        //recorrer el array para convetir los digitos tipo string a number 
        const tar=[]
        for (let i=0; i<sepRev.length; i++){
            tar.push(parseInt(sepRev[i]))    
        }
        
        //crear 2 arrays nuevos para separar los numeros de indices pares e impares
        const par=[];
        const impar=[];
        for(let ind=0; ind<tar.length; ind++){
            if(ind%2==0){
                par.push(tar[ind])
            }else if(ind%2 != 0) {
                impar.push(tar[ind])
            }
        }

        //nueva variable para guardar en un array los numeros de indices impares multiplicados por 2
        const impar2=[];
        for(let m=0; m<impar.length; m++){
            impar2.push(impar[m]*2)
        }

        //2 nuevos arrays para separar los numeros de una y dos cifras 
        const cifras1=[];
        const cifras2=[];

        for(let d=0;d<impar2.length;d++){
            if(impar2[d]>9){
                //los de 2 cifras convertirlos de una en strings para que sea más facil separlos por digitos
                cifras2.push(impar2[d].toString())
            }else if(impar2[d]<=9){
                cifras1.push(impar2[d])
            }
        }

        //nuevo array con los numeros de 2 cifras separados por digitos(string)
        const dig=[];
        for (let c=0; c<cifras2.length;c++){
            //con esto cada par de digitos separados van a quedar en arrays distintos anidados dentro de "dig"
            //ej: dig=[["1","2"],["1","0"],["1","4"]]
            dig.push(cifras2[c].split(''));        
        }
        
        //for...of para unir en un solo array los arrays anidados que contienen los numeros de 2 cifras separados por digitos
        //quedaría; dig=["1","2","1","0","1","4"]
        let unir=[];
        for (let mini of dig){
            unir=unir.concat(mini)
        }

        //convertir a tipo number los elementos del array anterior
        const impar5=unir.map(Number)

        //unir todos los arrays para hacer la suma final
        //impar5: array con los numeros de 2 cifras separados en digitos(posicion impar)
        //cifras1: array con los numeros de 1 cifra (posicion impar)
        //par: array con los numeros de las posiciones pares
        const todo= impar5.concat(par,cifras1)

        //iniciar una variable en cero para recorrer el array con todos los elementos a sumar y sumarlos a esa variable
        let suma=0
        for(let s=0; s<todo.length; s++){
            suma += todo[s]
        }

        //console.log(suma)

    
        if(suma%10 ==0){
            return true;
            
        }else if(suma%10 !=0){
            return false;
        }

    },

    maskify: function(creditNumber){
        let cifrador="";

        for(let i=0; i<creditNumber.length;i++){

            if(i<creditNumber.length-4){
                cifrador=cifrador + "#";
            }else{
                cifrador=cifrador + creditNumber[i];
            }
        }
        return cifrador

    }


 
};

export default validator;
