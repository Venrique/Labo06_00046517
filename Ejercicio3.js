function tipo(array){
    let tipos = [];
    let cantidad = [];

    for(let i of array){
        if(!tipos.includes(typeof(i))){
            tipos.push(typeof(i));
            cantidad.push(1);
        }else{
            for(let e of tipos){
                if(e == typeof(i)){
                    cantidad[tipos.indexOf(e)] = cantidad[tipos.indexOf(e)]+1;
                }
            }
        }
    }
    for(let u = 0;u<tipos.length;u++){
        console.log(tipos[u]+': '+cantidad[u]);
    }
}