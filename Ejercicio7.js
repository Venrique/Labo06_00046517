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

    console.log('X = '+Math.round(prom*10)/10+' ± '+Math.round(Math.sqrt(incerteza/(array.length-1))*10)/10);
}