function registrar() {
    let id_compra=document.getElementById('idCompra').value
    let fecha_emision=document.getElementById('fecha').value
    let proveedor=document.getElementById('proveedor').value
    let seProducto=document.getElementById('seProducto').value
    let total=document.getElementById('subTotal').value
    let id_producto=document.getElementById('id_producto').value
    let producto = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let cantidad = document.getElementById('cantidad').value
    let estado = document.getElementById('estado').value

    let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;

    let verificarNomPro = expRegNom.test(producto)

    if (id_compra== "" || fecha_emision == "" || estado=="" || proveedor == "" || seProducto == "" || total=="" || id_producto=="" || producto=="" || precio=="" || cantidad=="") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarNomPro ) {
            Swal.fire({
                icon: "success",
                title: "Compra registrada con exito",
                showConfirmButton: false,
              });
              setTimeout(() => {
                window.location.replace("/gestionCompras");
              }, 2000);
            
        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }
} 