function aleatorio(num){
    let array = [];
    let bandera =0;
    for(let i =0;i<20;i++){
        array.push(Math.round(Math.random()*21));
    }
    console.log(array);
    for(let x of array){
        if(num==x){
            bandera=1;
        }
    }
    if(bandera==1){
        console.log('Te has alzado con la victoria campeón');
    }else{
        console.log('Fracasaste en la búsqueda del éxito.');
        console.log('tip: los números van del 0 al 20');
    }
}