function registrar(event) {
    event.preventDefault();
    let idCotizacion = document.getElementById('idCotizacion').value
    let fecha = document.getElementById('fecha').value
    let vehiculo = document.getElementById('vehiculo').value
    let descuento = document.getElementById('descuento').value
    let manoDeObra = document.getElementById('manoDeObra').value
    let producto = document.getElementById('producto').value
    let idProducto = document.getElementById('idProducto').value
    let nombreProducto = document.getElementById('nombreProducto').value
    let precio = document.getElementById('precio').value
    let total = document.getElementById('total').value
    let cantidad = document.getElementById('cantidad').value
    if (idCotizacion == "" || fecha == "" || vehiculo == "" || producto == "" || idProducto == "" || nombreProducto == "" || precio == "" || total == "" || cantidad == "" || descuento == "" || manoDeObra == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Cotizacion registrada con exito',
            showConfirmButton: false,
        })
        setTimeout(() => {
            window.location.replace('/cotizaciones');
        }, 2000)
    }
}
function calcular() {
    let precio = document.getElementById('precio').value
    let cantidad = document.getElementById('cantidad').value


    resultado = precio * cantidad
    document.getElementById("total").value = resultado
}
function seleccionarProducto() {
    let producto = document.getElementById('producto').value
    document.getElementById("nombreProducto").value = producto
} 