const url = 'https://api-clientes-s7aw.onrender.com/api/cliente'

let paginaActual = 1
const elementosPagina = 8

const Buscador = () => {
    // Obtén una referencia al input de búsqueda y a la tabla
    const inputBusqueda = document.getElementById("inputBusqueda");
    const tabla = document.getElementById("tabla");
    const filas = tabla.getElementsByTagName("tr"); 888

    const terminoBusqueda = inputBusqueda.value.toLowerCase();

    // Itera a través de las filas de la tabla
    for (let i = 1; i < filas.length; i++) {
        const fila = filas[i];
        const celdas = fila.getElementsByTagName("td");
        let coincide = false;

        // Itera a través de las celdas de la fila actual
        for (let j = 0; j < celdas.length; j++) {
            const textoCelda = celdas[j].textContent.toLowerCase();

            // Comprueba si el texto de la celda coincide con el término de búsqueda
            if (textoCelda.includes(terminoBusqueda)) {
                coincide = true;
            }
        }

        // Muestra u oculta la fila según si coincide o no
        if (coincide) {
            fila.style.display = "";
        } else {
            fila.style.display = "none";
        }
    }
}


const registrar = async () => {
    let _id_cliente = document.getElementById('idCliente').value
    let _direccion = document.getElementById('direccion').value
    let _correo = document.getElementById('correo').value
    let _nombre = document.getElementById('nombre').value
    let _telefono = document.getElementById('telefono').value
    let _estado = document.getElementById('estado').value

    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;
    let expRegDirec = /^[\w\d# -]+$/;


    let verificarCorreo = expReg.test(_correo)
    let verificarNombre = expRegNom.test(_nombre)
    let verificarDirecc = expRegDirec.test(_direccion)



    if (_id_cliente == "" || _direccion == "" || _correo == "" || _nombre == "" || _telefono == "" || _estado == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarCorreo && verificarNombre && verificarDirecc) {
            
            let cliente = {
                idCliente: _id_cliente,
                nombre: _nombre,
                direccion: _direccion,
                telefono: _telefono,
                correo: _correo,
                estado: _estado
            }

            fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(cliente),//Convertir el objeto _usuario  a un JSON
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
                .then(json => {
                    //alert(json.msg)//Mensaje que retorna la API
                    //console.log(json)
                    Swal.fire({
                        icon: "success",
                        title: "Cliente registrado con exito",
                        showConfirmButton: false,
                    });
                    setTimeout(() => {
                        window.location.replace("/clientes");
                    }, 2000);
                })


        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }


}



const listarDatos = async () => {
    let respuesta = ''
    let body = document.getElementById('contenido')

    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(function (data) {

            let contador = 0;

            let listaProdutos = data.productos //Capturar el array devuelto por la api
            datos =
                listaProdutos.map(function (producto) {//Recorrer el array
                    var chequeado = ""
                    if (producto.estado == "true") {
                        chequeado = "checked"
                    }
                    respuesta += `<tr><td>${producto.idProducto}</td>` +
                        `<td>${producto.nombre}</td>` +
                        `<td>${producto.precioCompra}</td>` +
                        `<td>${producto.precioVenta}</td>` +
                        `<td>${producto.cantidad}</td>` +
                        `<td>${producto.stockMinimo}</td>` +
                        `<td>${producto.stockMaximo}</td>` +
                        `<td style="display: flex; justify-content: center; align-items: center">
            <a href="editarProductos" class="editar" onclick="listarP('${producto.idProducto}')">
              <i class="fa-solid fa-pen-to-square fa-lg" id="${producto.idProducto}" style="color: #ef850b; "></i>
            </a>
            <div >
              <input type="checkbox"   onclick="cambiarEstado(this)"  id="${producto.idProducto}" 
              ${chequeado}
              >
              <label class="toggleLabel" ></label>
            </div>
          </td>`+
                        `</tr>`
                    body.innerHTML = respuesta
                    contador++;
                })


            if (contador === data.productos.length) {
                const newButton = document.querySelectorAll('.editar')
                newButton.forEach(btn => {
                    btn.addEventListener('click', (event) => {

                        listaProdutos.forEach(producto => {
                            for (var i = 0; i < listaProdutos.length; i++) {
                                if (producto.idProducto == event.target.id) {
                                    window.localStorage.setItem(`datosProducto`, JSON.stringify(producto));
                                    break;
                                }
                            }
                        });
                    })
                });
            }
        })
}
8

async function cambiarEstado(input) {
    let producto = {
        idProducto: input.id,
        estado: input.checked
    }

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json; charset=UTF-8', },
            body: JSON.stringify(producto),
        });
        if (response.ok) {
            console.log('EStado actualizado')
        } else {
            console.log('Error al actualizar')
        }
    } catch (error) {
        console.error('Error en la solicitud:', error)
    }
}

const listarP = (idProducto) => {


    console.log(idProducto)
    const datosProductoRecuperado = JSON.parse(localStorage.getItem("datosProducto"));
    // alert(datosProductoRecuperado.idProducto);
    document.getElementById("_id_producto").value = datosProductoRecuperado.idProducto;
    document.getElementById("_precio_compra").value = datosProductoRecuperado.precioCompra;
    document.getElementById("_cantidad").value = datosProductoRecuperado.cantidad;
    document.getElementById("_nombre_producto").value = datosProductoRecuperado.nombre;
    document.getElementById("_estado").value = datosProductoRecuperado.estado;
    document.getElementById("_precio_venta").value = datosProductoRecuperado.precioVenta;
    document.getElementById("_stockMinimo").value = datosProductoRecuperado.stockMinimo;
    document.getElementById("_stockMaximo").value = datosProductoRecuperado.stockMaximo;

    localStorage.removeItem("datosProductos")

}


const actualizar = async () => {

    let _idProducto = document.getElementById("_id_producto").value;
    let _precio_compra = document.getElementById("_precio_compra").value;
    let _cantidad = document.getElementById("_cantidad").value;
    let _estado = document.getElementById("_estado").value;
    let _nombre_producto = document.getElementById("_nombre_producto").value;
    let _precio_venta = document.getElementById("_precio_venta").value;
    let _stockMinimo = document.getElementById("_stockMinimo").value;
    let _stockMaximo = document.getElementById("_stockMaximo").value;

    let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;

    let verificarNombreP = expRegNom.test(_nombre_producto);

    if (
        _idProducto == "" ||
        _precio_compra == "" ||
        _cantidad == "" ||
        _estado == "" ||
        _nombre_producto == "" ||
        _precio_venta == "" ||
        _stockMinimo == "" ||
        _stockMaximo == ""
    ) {
        Swal.fire("No se permiten campos vacios");
    } else {
        if (verificarNombreP) {
            let producto = {
                idProducto: _idProducto,
                nombre: _nombre_producto,
                precioCompra: _precio_compra,
                cantidad: _cantidad,
                estado: _estado,
                precioVenta: _precio_venta,
                stockMinimo: _stockMinimo,
                stockMaximo: _stockMaximo
            }

            fetch(url, {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(producto),//Convertir el objeto _usuario  a un JSON
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
                .then(json => {
                    //alert(json.msg)//Mensaje que retorna la API
                    console.log(producto)
                    Swal.fire({
                        icon: "success",
                        title: "Producto actualizado con exito",
                        showConfirmButton: false,
                    })

                    setTimeout(() => {
                        window.location.replace("/productos");
                    }, 2000);
                })
        } else {
            Swal.fire("No se permiten caracteres especiales");
        }

    }
}




if (document.querySelector('#btnRegistrar')) {
    document.querySelector('#btnRegistrar')
        .addEventListener('click', registrar)
}

if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
        .addEventListener('click', actualizar)
}

if (localStorage.getItem("datosProducto") != null) {
    listarP()
}


