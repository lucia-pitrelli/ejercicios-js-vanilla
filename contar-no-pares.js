function noParesDeContarImparesHasta(numero){
    
    let imparesTotales = 0;
    
    for( let i = 0; i < numero; i ++){
            if( (numero[i] > 0) && (numero[i] / 2) ) {
                  imparesTotales ++;
            }
        } 
        
    return imparesTotales;
    }

    console.log(noParesDeContarImparesHasta(8));