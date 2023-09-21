function registrar() {
    let idEmpleado = document.getElementById('idEmpleado').value
    let nombre = document.getElementById('nombre').value
    let correo = document.getElementById('correo').value
    let usuario = document.getElementById('usuario').value
    let direccion = document.getElementById('direccion').value
    let telefono = document.getElementById('telefono').value


    let expRegNom=/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;                    
    let expRegDirec= /^[\w\d# -]+$/;
    let verificarNombre = expRegNom.test(nombre)
    let verificarCorreo = expReg.test(correo)
    let verificarDirecc = expRegDirec.test(direccion) 

    if (idEmpleado == "" || nombre == "" || correo == "" || usuario == "" || direccion == "" || telefono == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarNombre && verificarCorreo && verificarDirecc) {
            Swal.fire({
                icon: 'success',
                title: 'Empleado registrado con exito',
                showConfirmButton: false,
              })
            setTimeout(()=>{
                window.location.replace('/empleado');
                    },2000) 
            
        }


         else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }
} 