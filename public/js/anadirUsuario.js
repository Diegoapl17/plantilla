//API USUARIOS
const url = 'https://api-usuario-2oqx.onrender.com/api/usuario'

//API ROLES
const urlR = 'https://api-rol.onrender.com/api/rol'

const Buscador = () => {
    // Obtén una referencia al input de búsqueda y a la tabla
    const inputBusqueda = document.getElementById("inputBusqueda");
    const tabla = document.getElementById("miTabla");
    const filas = tabla.getElementsByTagName("tr");

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
};


const listarDatos = async () => {


    let respuesta = ''
    let body = document.getElementById('contenido')
    //url: Es la url de la api.
    //Al deslpegarla en el servidor colocar la api del servidor
    fetch(url, {
        method: 'GET',
        mode: 'cors',
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(function (data) {
            let contador = 0;

            let listaUsuarios = data.usuarios //Capturar el array devuelto por la api
            datos =
                listaUsuarios.map(function (usuario) {//Recorrer el array
                    var chequeado = ""
                    if (usuario.estado == "true") {
                        chequeado = "checked"
                    }
                    respuesta += `<tr id="${usuario.documento}"><td>${usuario.documento}</td>` +
                        `<td>${usuario.nombre}</td>` +
                        `<td>${usuario.direccion}</td>` +
                        `<td>${usuario.telefono}</td>` +
                        `<td>${usuario.correo}</td>` +
                        `<td>${usuario.idRol}</td>` +
                        `<td td style="display: flex; justify-content: center; align-items: center">
                        <a href="editarUsuarios" class="editar" onclick="listarU('${usuario.documento}')"><i class="fa-solid fa-pen-to-square fa-lg" id="${usuario.documento}" style="color: #ef850b;"></i></a>
                        <div>
                          <input type="checkbox" onclick="cambiarEstado(this)" id="${usuario.documento}" 
                          ${chequeado}
                          >
                          <label class="toggleLabel"></label>
                        </div>
                      </td>` +
                        `</tr>`
                    body.innerHTML = respuesta
                    contador++;
                })
            if (contador === data.usuarios.length) {
                const newButton = document.querySelectorAll('.editar')
                newButton.forEach(btn => {
                    btn.addEventListener('click', (event) => {

                        listaUsuarios.forEach(usuario => {
                            for (var i = 0; i < listaUsuarios.length; i++) {
                                if (usuario.documento == event.target.id) {
                                    window.localStorage.setItem(`datosUsuario`, JSON.stringify(usuario));
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
    let usuario = {
        documento: input.id,
        estado: input.checked
    }

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json; charset=UTF-8', },
            body: JSON.stringify(usuario),
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


const registrar = async () => {
    let _documento = document.getElementById('documento').value
    let _nombre = document.getElementById('nombre').value
    let _direccion = document.getElementById('direccion').value
    let _telefono = document.getElementById('telefono').value
    let _correo = document.getElementById('correo').value
    let _estado = document.getElementById('estado').value
    let _rol = document.getElementById('rol').value


    let expReg = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let expRegNom = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{2,48}?$/;
    let expRegDirec = /^[\w\d# -]+$/;
    let verificarCorreo = expReg.test(_correo)
    let verificarNombre = expRegNom.test(_nombre)
    let verificarDirecc = expRegDirec.test(_direccion)

    if (_documento == "" || _direccion == "" || _correo == "" || _nombre == "" || _telefono == "" || _estado == "" || _rol == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarCorreo && verificarNombre && verificarDirecc) {
            let usuario = {
                documento: _documento,
                nombre: _nombre,
                direccion: _direccion,
                telefono: _telefono,
                correo: _correo,
                estado: _estado,
                idRol: _rol
            }

            fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(usuario),//Convertir el objeto _usuario  a un JSON
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
                .then(json => {
                    //alert(json.msg)//Mensaje que retorna la API
                    console.log(json)
                    if (json.msg) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Usuario registrado con exito',
                            showConfirmButton: false,
                        })
                    }
                })
            setTimeout(() => {
                window.location.replace('/usuarios');
            }, 2000)


        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }



}




const listarU = (documento) => {

    
    console.log(documento)
    const datosUsuarioRecuperado = JSON.parse(localStorage.getItem("datosUsuario"));
    document.getElementById("_documento").value = datosUsuarioRecuperado.documento;
    document.getElementById("_nombre").value = datosUsuarioRecuperado.nombre;
    document.getElementById("_direccion").value = datosUsuarioRecuperado.direccion;
    document.getElementById("_correo").value = datosUsuarioRecuperado.correo;
    document.getElementById("_telefono").value = datosUsuarioRecuperado.telefono;
    document.getElementById("_estado").value = datosUsuarioRecuperado.estado;
    document.getElementById("_rol").value = datosUsuarioRecuperado.rol;


    localStorage.removeItem("datosUsuario")

}

const actualizar = async () => {

    let _documento = document.getElementById('_documento').value
    let _nombre = document.getElementById('_nombre').value
    let _direccion = document.getElementById('_direccion').value
    let _correo = document.getElementById('_correo').value
    let _telefono = document.getElementById('_telefono').value
    let _estado = document.getElementById('_estado').value
    let _rol = document.getElementById('_rol').value


    let usuario = {
        documento: _documento,
        nombre: _nombre,
        direccion: _direccion,
        telefono: _telefono,
        correo: _correo,
        estado: _estado,
        idRol: _rol
    }


    fetch(url, {
        method: 'PUT',
        mode: 'cors',
        body: JSON.stringify(usuario),//Convertir el objeto _usuario  a un JSON
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
        .then((resp) => resp.json()) //Obtener la respuesta y convertirla a json
        .then(json => {

            //alert(json.msg)//Mensaje que retorna la API
            Swal.fire({
                icon: "success",
                title: "Usuario actualizado con exito",
                showConfirmButton: false,
              })
        })
        setTimeout(() => {
            window.location.replace("/usuarios");
          }, 2000);
}

if (document.querySelector('#botoncito')) {
    document.querySelector('#botoncito')
        .addEventListener('click', registrar)
}
if (document.querySelector('#editar')) {
    document.querySelector('#editar')
        .addEventListener('click', actualizar)
}

if (localStorage.getItem("datosUsuario") != null) {
    listarU()
}