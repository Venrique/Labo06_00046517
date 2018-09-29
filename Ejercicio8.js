function sumamatriz(matriz1,matriz2){
    
    if(matriz1[0].length != matriz2[0].length){
        console.log("No se puede efectuar la suma");
    }else{
        let suma = new Array(matriz1.length);
        for(let i=0;i<matriz1.length;i++){
            suma[i] = new Array(matriz1[0].length);
            for(let e=0;e<matriz1[0].length;e++){
                suma[i][e] = matriz1[i][e]+matriz2[i][e];
            }
        }
        console.log(suma);
    }
   
}

/*
matriz de prueba

sumamatriz([[2,2],[4,2],[3,1]],[[8,1],[6,7],[5,9]])
*/