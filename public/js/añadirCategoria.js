function registrar() {
    let idServicio=document.getElementById('idServicio').value
    let nombre=document.getElementById('nombre').value
    let estado=document.getElementById('estado').value


    if(idServicio=='' || nombre=='' || estado==''){
        Swal.fire('No se permiten campos vacios')
    }else {
        Swal.fire({
            icon: 'success',
            title: 'Categoria de servicio registrado con exito',
            showConfirmButton: false,
          })
        setTimeout(()=>{
            window.location.replace('/categoriaServicio');
                },2000)
        
    }
    
}