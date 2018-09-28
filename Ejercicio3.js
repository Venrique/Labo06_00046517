function tipo(array){
    let tipos = [];
    let cantidad = [];

    for(let i of array){
        console.log(typeof(i));
        if(!tipos.includes(typeof(i))){
            tipos.push(typeof(i));
            cantidad.push(1);
        }else{
            for(let e of tipos){
                if(e == typeof(i)){
                    cantidad[tipos.indexOf(e)]+1;
                }
            }
        }
    }
    console.log(cantidad);
}