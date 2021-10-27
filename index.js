
function getProbability(){
    
    // aqui se genera el valor aleatorio entre 1 y 10
    let valor = Math.floor(Math.random() * (10 - 0)) + 1;

    // dado a que la probabilidad de que salga cara o sello es de 1/5 se toma que todo valor por encima de 5 es verdadero y todo valor por debajo es falso 
    if( valor < 5 ){

        return true;

    }else{

        return false;

    }
    
}

// Para hacer mas iteraciones se puede cambiar el numero 
let nroPruebas = 10;

// Variables para la contabilizacion de los resultados
let veces_cara = 0;
let veces_sello = 0;

for (let i = 0; i < nroPruebas; i++) {
    
    if(getProbability()){
        
        // si es verdadero significa que salio cara 
        console.log("cara")
        veces_cara ++;
    }else{

        // si es falso significa sello 
        console.log("sello")
        veces_sello++;
    }
    
}

console.log("Las veces que ha salido cara ha sido: ",veces_cara);
console.log("Las veces que ha salido sello ha sido: ",veces_sello);
