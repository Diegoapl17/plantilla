function registrar(event) {
    event.preventDefault(); 
    let idRol = document.getElementById('idRol').value
    let usuario = document.getElementById('usuario').value
    let rol = document.getElementById('rol').value
    let estado = document.getElementById('estado')
    if (idRol == '' || usuario == '' || rol == '' || estado == '') {
        Swal.fire('No se permiten campos vacios')
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Rol registrado con exito',
            showConfirmButton: false,
          })
        setTimeout(()=>{
            window.location.replace('/roles');
                },2000)
        
    }
}   