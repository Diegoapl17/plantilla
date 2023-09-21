const url = 'https://api-categoria.onrender.com/api/categoria'

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

      let listarCategorias = data.categoria //Capturar el array devuelto por la api
      datos =
        listarCategorias.map(function (categoria) {//Recorrer el array
          var chequeado = ""
          if (categoria.estado == "true") {
            chequeado = "checked"
          }
          respuesta += `<tr><td>${categoria.id}</td>` +
            `<td>${categoria.nombre}</td>` +
            `<td>${categoria.descripcion}</td>` +
            `<td style="display: flex; justify-content: center; align-items: center">
              <a href="editarCategoria" class="editar" onclick="listarC('${categoria.id}')">
                <i class="fa-solid fa-pen-to-square fa-lg" id="${categoria.id}" style="color: #ef850b; "></i>
              </a>
              <div >
                <input type="checkbox"   onclick="cambiarEstado(this)"  id="${categoria.id}" 
                ${chequeado}
                >
                <label class="toggleLabel" ></label>
              </div>
            </td>`+
            `</tr>`
          body.innerHTML = respuesta
          contador++;
        })


      if (contador === data.categoria.length) {
        const newButton = document.querySelectorAll('.editar')
        newButton.forEach(btn => {
          btn.addEventListener('click', (event) => {
            //console.log(listarCategorias)

            listarCategorias.forEach(categoria => {
              for (var i = 0; i < listarCategorias.length; i++) {
                if (categoria.id == event.target.id) {
                  window.localStorage.setItem(`datosCategoria`, JSON.stringify(categoria));
                  break;
                }
              }
            });
          })
        });
      }

    })
}

async function cambiarEstado(input) {
  let categoria = {
    id: input.id,
    estado: input.checked
  }

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json; charset=UTF-8', },
      body: JSON.stringify(categoria),
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

const listarC = (id) => {


  //console.log(id)
  const datosCategoriaRecuperado = JSON.parse(localStorage.getItem("datosCategoria"));
   //alert(datosCategoriaRecuperado.id);
  document.getElementById("_id").value = datosCategoriaRecuperado.id;
  document.getElementById("_nombre").value = datosCategoriaRecuperado.nombre;
  document.getElementById("_descripcion").value = datosCategoriaRecuperado.descripcion;


  localStorage.removeItem("datosCategoria")

}

const registrar = async () => {
  let _id = document.getElementById('id').value
  let _nombre = document.getElementById('nombre').value
  let _estado = document.getElementById('estado').value
  let _descripcion = document.getElementById('descripcion').value


  let categoria = {
    id: _id,
    nombre: _nombre,
    estado: _estado,
    descripcion: _descripcion
  }

  fetch(url, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(categoria),//Convertir el objeto _categoria  a un JSON
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })

    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(json => {
      //alert(json.msg)//Mensaje que retorna la API
      console.log(json)

      if (_id == "" || _nombre == "" || _estado == "" || _descripcion == "") {
        Swal.fire('No se permiten campos vacios')
      } else {
        if (json.msg) {
          Swal.fire({
            icon: "success",
            title: "Compra registrada con exito",
            showConfirmButton: false,
          });
          setTimeout(() => {
            window.location.replace("/categoriaServicio");
          }, 2000);

        } else {
          Swal.fire('No se permiten caracteres especiales')
        }
      }
      /*if(){
          Swal.fire(
              json.msg,
              'insercion exitosa',
              'success'
          )
      }*/
    })
}

const editar = (categoria) => {
  document.getElementById('id').value = ''
  document.getElementById('nombre').value = ''
  document.getElementById('estado').value = ''
  document.getElementById('descripcion').value = ''

  document.getElementById('id').value = categoria.id
  document.getElementById('nombre').value = categoria.nombre
  document.getElementById('estado').value = categoria.estado
  document.getElementById('descripcion').value = categoria.descripcion
}

const actualizar = async () => {
  let _id = document.getElementById('_id').value
  let _nombre = document.getElementById('_nombre').value
  let _estado = document.getElementById('_estado').value
  let _descripcion = document.getElementById('_descripcion').value

  let categoria = {
    id: _id,
    nombre: _nombre,
    estado: _estado,
    descripcion: _descripcion
  }

  fetch(url, {
    method: 'PUT',
    mode: 'cors',
    body: JSON.stringify(categoria),//Convertir el objeto _categoria  a un JSON
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
    .then(json => {
      alert(json.msg)//Mensaje que retorna la API
    })
}
if (document.querySelector('#btnRegistrar')) {
  document.querySelector('#btnRegistrar')
    .addEventListener('click', registrar)
}

if (document.querySelector('#btnActualizar')) {
  document.querySelector('#btnActualizar')
    .addEventListener('click', actualizar)
}
if (localStorage.getItem("datosCategoria") != null) {
  listarC()
}

