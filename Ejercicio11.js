var usuarios = [];

function agregar(name,ape,fecha,tele,correo){
    let user = {
        nombre: name,
        apellido: ape,
        fechanac: fecha,
        telefono: tele,
        correo: correo
    }
    usuarios.push(user);
    console.log(usuarios);
}