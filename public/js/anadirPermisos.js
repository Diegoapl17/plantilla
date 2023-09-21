function registrar(event) {
    event.preventDefault(); 
    let idPermiso=document.getElementById('idPermiso').value
    let nombre=document.getElementById('nombre').value 
    let enlace=document.getElementById('enlace').value
    let estado=document.getElementById('estado').value

    if(idPermiso=='' || nombre=='' || enlace=='' || estado==''){
        Swal.fire('No se permiten campos vacios')
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Permiso registrado con exito',
            showConfirmButton: false,
          })
        setTimeout(()=>{
            window.location.replace('/permisos');
                },2000)
}
} 