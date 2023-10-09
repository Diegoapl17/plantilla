function registrar() {
    let idVenta = document.getElementById('idVenta').value
    let cliente = document.getElementById('cliente').value
    let fecha = document.getElementById('fecha').value
    let pago = document.getElementById('pago').value
    let costoManoObra = document.getElementById('costoManoObra').value
    let valorManoObra = document.getElementById('valorManoObra').value
    let idProducto = document.getElementById('idProducto').value
    let precioCompra = document.getElementById('precioCompra').value
    let precioVenta = document.getElementById('precioVenta').value
    let cantidadProducto = document.getElementById('cantidadProducto').value
    let total = document.getElementById('total').value


    if(idVenta=='' || cliente=='' || fecha=='' || pago=='' || costoManoObra=='' || valorManoObra=='' || idProducto=='' || precioCompra=='' || precioVenta=='' || cantidadProducto=='' || total==''){
        Swal.fire('No se permiten campos vacios')
    }else{
    Swal.fire(
        'Registro Exitoso!',  
        'Venta registrada con exito!',
        'success'
    )
}
}