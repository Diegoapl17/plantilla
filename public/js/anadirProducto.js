const url = 'https://api-productos3.onrender.com/api/producto'

const registrar = async () => {

  let _idProducto = document.getElementById("id_producto").value;
  let _precio_compra = document.getElementById("precio_compra").value;
  let _cantidad = document.getElementById("cantidad").value;
  let _estado = document.getElementById("estado").value;
  let _nombre_producto = document.getElementById("nombre_producto").value;
  let _precio_venta = document.getElementById("precio_venta").value;
  let _stockMinimo = document.getElementById("stockMinimo").value;
  let _stockMaximo = document.getElementById("stockMaximo").value;

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
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(producto),//Convertir el objeto _usuario  a un JSON
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {
          //alert(json.msg)//Mensaje que retorna la API
          //console.log(json)
          Swal.fire({
            icon: "success",
            title: "Producto registrado con exito",
            showConfirmButton: false,
          })
          
          setTimeout(() => {
            window.location.replace('/productos');
          }, 2000)
          // setTimeout(() => {
          //   window.location.replace("/productos");
          // }, 20066660);
        })
    } else {
      Swal.fire("No se permiten caracteres especiales");
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
            <div class="switch" style="margin-top: -9px">
              <input type="checkbox" class="toggleSwitch" id="${producto.idProducto}">
              <label class="toggleLabel" for="${producto.idProducto}"></label>
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

const listarP = () => {
  const url = 'https://api-productos3.onrender.com/api/producto'


  const datosProductoRecuperado = JSON.parse(localStorage.getItem("datosProducto"));
  // alert(datosProductoRecuperado.idProducto);
  document.getElementById("id_producto").value = datosProductoRecuperado.idProducto;
  document.getElementById("precio_compra").value = datosProductoRecuperado.precioCompra;
  document.getElementById("cantidad").value = datosProductoRecuperado.cantidad;
  document.getElementById("nombre_producto").value = datosProductoRecuperado.nombre;
  document.getElementById("estado").value = datosProductoRecuperado.estado;
  document.getElementById("precio_venta").value = datosProductoRecuperado.precioVenta;
  document.getElementById("stockMinimo").value = datosProductoRecuperado.stockMinimo;
  document.getElementById("stockMaximo").value = datosProductoRecuperado.stockMaximo;


  localStorage.removeItem("datosProductos")

  // fetch(url, {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: { "Content-type": "application/json; charset=UTF-8" }
  // })
  //   .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
  //   .then(function (data) {
  //     let produto1 = data.productos
  //     datos =
  //       produto1.map(function (producto) {//Recorrer el array
  //         for (let index = 0; index < producto.idProducto.length; index++) {
  //           alert(producto.idProducto)
  //           if (llamarID == producto.idProducto) {
  //             document.getElementById("id_producto").value = producto.idProducto
  //             document.getElementById("precio_compra").value = producto.precioCompra
  //             document.getElementById("cantidad").value = producto.cantidad
  //             document.getElementById("estado").value = producto.estado
  //             document.getElementById("nombre_producto").value = producto.nombre
  //             document.getElementById("precio_venta").value = producto.precioVenta
  //             document.getElementById("stockMinimo").value = producto.stockMinimo
  //             document.getElementById("stockMaximo").value = producto.stockMaximo
  //             break;
  //           }
  //         }
  //       })
  //   })

  //   alert('hola'+ producto.nombre)


}


const actualizar = async () => {

  let _idProducto = document.getElementById("id_producto").value;
  let _precio_compra = document.getElementById("precio_compra").value;
  let _cantidad = document.getElementById("cantidad").value;
  let _estado = document.getElementById("estado").value;
  let _nombre_producto = document.getElementById("nombre_producto").value;
  let _precio_venta = document.getElementById("precio_venta").value;
  let _stockMinimo = document.getElementById("stockMinimo").value;
  let _stockMaximo = document.getElementById("stockMaximo").value;

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

          // setTimeout(() => {
          //   window.location.replace("/productos");
          // }, 20066660);
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