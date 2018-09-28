function untipo(tipo,array){
    let resultado = [];
    for(let i of array){
        tipo = tipo.toLowerCase();
        if(typeof(i)==tipo){
            resultado.push(i);
        }
    }
    console.log(resultado);
}