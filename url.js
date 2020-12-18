function agregarHttp(url){
    return "http://" + url;
}
const arrayPepe = ["www.google.com","www.yahoo.com"];

function procesar(array,agregarHttp){
const arrayFinal =[];

    for (let i = 0; i < array.length; i ++) {
        arrayFinal.push(agregarHttp(array[i]));
     
    };
return arrayFinal;

}

console.log(procesar(arrayPepe,agregarHttp));
