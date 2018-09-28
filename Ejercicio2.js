function sumaprom(array){
    let suma =0;
    let prom=0;
    for(let i of array){
        suma = suma+i;
    }
    prom = suma/array.length;

    console.log('Suma: ' + suma + ' - Promedio: ' +prom);
}