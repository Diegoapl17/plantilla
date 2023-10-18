
function ingresar() {
    var admon = document.getElementById("usuario").value;
    var password = document.getElementById("contraseña").value;

    if (admon=="" || password==""){
        Swal.fire('No se permiten campos vacios')
    } else {  
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Usuario o contraseña incorrecta!'
              })
            bandera = false;
            // setTimeout(function() {
            //     window.location.href = "login";
            // }, 2000); 
            
        }
    
    if (admon === "admin" && password === "1234") {
      
        bandera = true;
        Swal.fire(
            'Bienvenido!',
            'Inicio de sesion exitoso',
            'success'
          )
        setTimeout(function() {
            window.location.href = "index";
        }, 2000); 
    } 
}

document.getElementById("btnIngresar").addEventListener("click", ingresar);
