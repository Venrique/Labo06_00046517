var usuarios = [];
var contador = 0;

function mantenimiento(){
    let bandera = 0;
    while(bandera == 0){
        let opcion = prompt('Ingrese una opción para la persona:\n1.Ingresar\n2.Buscar\n3.Modificar\n4.Eliminar\n5.Mostrar todas\n6.Salir ','# opción');
        switch(opcion){
            case '1':
                let nombre = prompt('Ingrese el nombre:');
                let apellido = prompt('Ingrese el apellido:');
                let fecha = prompt('Ingrese la fecha de nacimiento:');
                let telefono = prompt('Ingrese el telefono:');
                let email = prompt('Ingrese el correo:');
                agregar(nombre,apellido,fecha,telefono,email);
                break;
            case '2':
                let bus = prompt('Nombre de la persona que desea buscar: ');
                buscar(bus);
                break;
            case '3':
                let id2 = prompt('Ingrese el id de la persona a modificar: ');
                let nombre2 = prompt('Ingrese el nombre (escriba - si no desea modificar el campo):');
                let apellido2 = prompt('Ingrese el apellido (escriba - si no desea modificar el campo):');
                let fecha2 = prompt('Ingrese la fecha de nacimiento (escriba - si no desea modificar el campo):');
                let telefono2 = prompt('Ingrese el telefono (escriba - si no desea modificar el campo):');
                let email2 = prompt('Ingrese el correo (escriba - si no desea modificar el campo):');
                modificar(id2,nombre2,apellido2,fecha2,telefono2,email2);
                break;
            case '4':
                let eli = prompt('Ingrese el id del usuario a eliminar');
                eliminar(eli);
                break;
            case '5':
                vertodos();
                break;
            case '6':
                bandera = 1;
                break;
            default:
                console.log('Ingrese una opción válida.');
                break;
        }
    }
}

function agregar(name,ape,fecha,tele,correo){
    let user = {
        id: contador,
        nombre: name,
        apellido: ape,
        fechanac: fecha,
        telefono: tele,
        correo: correo
    }
    usuarios.push(user);
    contador +=1;
    console.log('Se agregó correctamente.');
}

function buscar(nombre){
    for(let i of usuarios){
        if(nombre == i.nombre){
            console.log('- - - - - ');
            console.log('Usuario: '+i.id);
            console.log('Nombre: '+i.nombre);
            console.log('Apellido: '+i.apellido);
            console.log('Fecha Nacimiento: '+i.fechanac);
            console.log('Telefono: '+i.telefono);
            console.log('Correo: '+i.correo);
        }
    }
}

function modificar(id,name,ape,fecha,tele,correo){
    for(let i of usuarios){
        if(i.id == id){
            if(name!='-'){
                i.nombre = name;
            }
            if(ape!='-'){
                i.apellido = ape;
            }
            if(fecha!='-'){
                i.fechanac = fecha;
            }
            if(tele!='-'){
                i.telefono = tele;
            }
            if(correo!='-'){
                i.correo = correo;
            }
        }
    }
    console.log('Se modificó correctamente');
}

function eliminar(num){
    usuarios.splice(num,1);
    console.log('Se eliminó correctamente');
}

function vertodos(){
    for(let i of usuarios){
        console.log('- - - - - ');
        console.log('Usuario: '+i.id);
        console.log('Nombre: '+i.nombre);
        console.log('Apellido: '+i.apellido);
        console.log('Fecha Nacimiento: '+i.fechanac);
        console.log('Telefono: '+i.telefono);
        console.log('Correo: '+i.correo);
    }
    
}