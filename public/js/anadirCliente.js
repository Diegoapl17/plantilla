function registrar() {
    let id_cliente = document.getElementById('idCliente').value
    let direccion = document.getElementById('direccion').value
    let correo = document.getElementById('correo').value
    let nombre = document.getElementById('nombre').value
    let telefono = document.getElementById('telefono').value
    let estado = document.getElementById('estado').value

    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;
    let expRegDirec = /^[\w\d# -]+$/;


    let verificarCorreo = expReg.test(correo)
    let verificarNombre = expRegNom.test(nombre)
    let verificarDirecc = expRegDirec.test(direccion)

    

    if (id_cliente=="" || direccion=="" || correo=="" || nombre=="" || telefono=="" || estado=="") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarCorreo && verificarNombre && verificarDirecc ) {
            Swal.fire({
                icon: "success",
                title: "Cliente registrado con exito",
                showConfirmButton: false,
              });
              setTimeout(() => {
                window.location.replace("/clientes");
              }, 2000);
        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }
} 