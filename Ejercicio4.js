function sumapyu(array){
    let contador = 0;
        for(let i = 0; i < array.length/2;i++){
            console.log('Suma'+contador+': '+(array[i]+array[(array.length-1)-i]));
            contador++;
        }
    
}