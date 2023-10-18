function registrar() {
    let pago = document.getElementById('pago').value
    let valorManoObra = document.getElementById('valorManoObra').value
    let costoInsumos = document.getElementById('costoInsumos').value
    let idCotizacion = document.getElementById('idCotizacion').value
    let idCliente = document.getElementById('idCliente').value


    if( pago=='' || valorManoObra=='' || costoInsumos=='' || idCotizacion=='' || idCliente=='' ){
        Swal.fire('No se permiten campos vacios')
    }else{
    Swal.fire(
        'Registro Exitoso!',  
        'Venta registrada con exito!',
        'success'
    )
}
}