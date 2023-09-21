function registrar() {
    let idServicio = document.getElementById('idServicio').value;
    let categoria = document.getElementById('categoria').value;
    let nombre = document.getElementById('nombre').value;
    let estado = document.getElementById('estado').value;

    // Revisa si alguno de los campos está vacío
    let camposVacios = false;
    if (idServicio === '') {
        document.getElementById('idServicio').style.backgroundColor = 'red';
        camposVacios = true;
    } else {
        document.getElementById('idServicio').style.backgroundColor = '';
    }

    if (categoria === '') {
        document.getElementById('categoria').style.backgroundColor = 'red';
        camposVacios = true;
    } else {
        document.getElementById('categoria').style.backgroundColor = '';
    }

    if (nombre === '') {
        document.getElementById('nombre').style.backgroundColor = 'red';
        camposVacios = true;
    } else {
        document.getElementById('nombre').style.backgroundColor = '';
    }

    if (estado === '') {
        document.getElementById('estado').style.backgroundColor = 'red';
        camposVacios = true;
    } else {
        document.getElementById('estado').style.backgroundColor = '';
    }

    // Si hay campos vacíos, muestra un mensaje de error
    if (camposVacios) {
        Swal.fire('No se permiten campos vacíos');
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Servicio registrado con exito',
            showConfirmButton: false,
          })
        setTimeout(()=>{
            window.location.replace('/gestionServicio');
                },2000)
        
    }
}

