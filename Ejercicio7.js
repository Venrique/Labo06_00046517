function fisica(array){
    let prom = 0;

    for(let i of array){
        prom = prom+i;
    }
    prom = prom/array.length;

    let incerteza = 0;

    for(let i of array){
        incerteza = incerteza+(i-prom)**2;
    }

    console.log('X = '+prom+' ± '+Math.sqrt(incerteza/(array.length-1)));
}