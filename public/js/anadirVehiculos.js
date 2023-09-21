function registrar(event) {
    event.preventDefault();
    let placa = document.getElementById('placa').value
    let referencia = document.getElementById('referencia').value
    let modelo = document.getElementById('modelo').value
    let chasis = document.getElementById('chasis').value
    let color = document.getElementById('color').value
    let cliente = document.getElementById('cliente').value


    let expPlaca = /^[a-zA-Z0-9\s]+$/
    let expReferencia = /^[a-zA-Z0-9\s]+$/
    let expChasis = /^[a-zA-Z0-9\s]+$/
    let expColor = /^[a-zA-Z0-9\s]+$/



    let verificarPlaca = expPlaca.test(placa)
    let verificarReferencia = expReferencia.test(referencia)
    let verificarChasis = expChasis.test(chasis)
    let verificarColor = expColor.test(color)

    if (placa == "" || referencia == "" || modelo == "" || chasis == "" || color == "" || cliente == "") {
        Swal.fire('No se permiten campos vacios')
    } else {
        if (verificarPlaca && verificarReferencia && verificarChasis && verificarColor) {
            Swal.fire({
                icon: 'success',
                title: 'Vehiculo registrado con exito',
                showConfirmButton: false,
            })
            setTimeout(() => {
                window.location.replace('/vehiculos');
            }, 2000)


        } else {
            Swal.fire('No se permiten caracteres especiales')
        }
    }
} 