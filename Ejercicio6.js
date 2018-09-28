function encrip(cadena){
    let palabra = cadena.split("");
    let nueva = []
    for(let i of palabra){
        switch(i){
            case 'm':
                nueva.push(0);
                break;
            case 'u':
                nueva.push(1);
                break;
            case 'r':
                nueva.push(2);
                break;
            case 'c':
                nueva.push(3);
                break;
            case 'i':
                nueva.push(4);
                break;
            case 'e':
                nueva.push(5);
                break;
            case 'l':
                nueva.push(6);
                break;
            case 'a':
                nueva.push(7);
                break;
            case 'g':
                nueva.push(8);
                break;
            case 'o':
                nueva.push(9);
                break;
            default:
                nueva.push(i);
        }
    }
    console.log(nueva.join(""));
}