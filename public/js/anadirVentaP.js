function registrar() {
    let cliente = document.getElementById('cliente').value
    let pago = document.getElementById('pago').value
    let estado = document.getElementById('estado').value
    let idProducto = document.getElementById('idProducto').value
    let precioCompra = document.getElementById('precioCompra').value
    let precioVenta = document.getElementById('precioVenta').value
    let cantidadProducto = document.getElementById('cantidadProducto').value
    let total = document.getElementById('total').value

  

    if( cliente=='' || pago=='' || estado=='' || idProducto=='' || precioCompra=='' || precioVenta=='' || cantidadProducto=='' || total==''){
        Swal.fire('No se permiten campos vacios') 
    }else{
    Swal.fire(
        'Registro Exitoso!',  
        'Venta registrada con exito!',
        'success'
    )
}
}