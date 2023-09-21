function registrar(event) {
    event.preventDefault();
    let direccion = document.getElementById('direccion').value
    let correo = document.getElementById('correo').value
    let nombre = document.getElementById('nombre').value
    let telefono = document.getElementById('telefono').value



    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;                    
    let expRegNom=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;
    let expRegDirec= /^[\w\d# -]+$/;
    let verificarCorreo = expReg.test(correo)
    let verificarNombre = expRegNom.test(nombre)
    let verificarDirecc = expRegDirec.test(direccion)

    if (direccion == "" || correo == "" || nombre == "" || telefono == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarCorreo && verificarNombre && verificarDirecc) {
            Swal.fire({
                icon: 'success',
                title: 'Usuario registrado con exito',
                showConfirmButton: false,
              })
            setTimeout(()=>{
                window.location.replace('/usuarios');
                    },2000)


        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }
} 