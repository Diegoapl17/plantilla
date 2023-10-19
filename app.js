//Importando librerias o paquetes
const express = require('express');
const exphbs = require('express-handlebars');
//const moduloLogin = require('./public/js/login.js')
//const bandera = require('./public/js/login.js');
//const bandera = moduloLogin.bandera;
//https://colorlib.com/wp/free-admin-templates/



//instalar hbs: motor de plantillas de node
const hbs = require('hbs')

const path = require('path');

const app = express(); //Especificar la funcion 

// var cambio = true;
// console.log(cambio + "hi");

const port = 8181 //Definir el puerto de la aplicacion

// if ( bandera ) {
//     console.log('El valor de labandera es: '+  bandera )
// }else{
//     console.log('La vandera no esta definida')
// }
// console.log(moduloLogin);
app.use(express.static(path.join(__dirname, 'public')));
//Directorio de paginas estaticas
app.use(express.static('public'))
app.use(express.static('views'))
app.use(express.static('/public/build/css'))



///Configuracion de vistas del hbs
//app.set('views',path.join(__dirname+'/public/views'))
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerPartials(__dirname + './public/build/css')

app.set('view engine', 'hbs');

//Escuchar el puerto
app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`)
})

// app.get('/getBandera', (req, res)=> {
//     res.json({bandera: window.myGlobalVariable })
// });



app.set('port', process.env.PORT || 8181);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'menu',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

//La pagina que por defecto se cargará 
app.get('/index', (req, res) => {
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('index', {
        login: true
    })

})

//La pagina que por defecto se cargará 
app.get('/', (req, res) => {
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('login', {
        login: false
    })

})
app.get('/roles', (req, res) => {
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('roles', {
        login: true
    })

})
//ERROR 404
//Direccionamieno pagina de Roles
app.get('/anadirRol', (req, res) => {
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('anadirRol', {
        login: true
    })

})

app.get('/login', (req, res) => {
    res.render('login', {
        login: false
    })

})


//Direccionamiento a la pagina de edicion de roles
app.get('/editarRoles', (req, res) => {
    res.render('editarRoles', {
        login: true
    })

})

//Direcionamiento pagina de permisos
app.get('/permisos', (req, res) => {
    res.render('permisos',{
        login: true
    })

})
//Direcionamiento pagina de anadirPermisos
app.get('/anadirPermisos', (req, res) => {
    res.render('anadirPermisos',{
        login: true
    })

})
//Direccionamiento pagina Editar Permisos
app.get('/editarPermisos', (req, res) => {
    res.render('editarPermisos',{
        login: true
    })

})
//Direccionamiento pagina Usuarios
app.get('/usuarios', (req, res) => {
    res.render('usuarios',{
        login: true
    })

})
//Direccionamiento pagina anadirUsuarios
app.get('/anadirUsuarios', (req, res) => {
    res.render('anadirUsuarios'),{
        login: true
    }

})
//Direccionamiento a la pagina de edicion del usuario
app.get('/editarUsuarios', (req, res) => {
    res.render('editarUsuarios'),{
        login: true
    }

})

//direccionamiento a la pagina de productos
app.get('/productos', (req, res) => {
    res.render('productos',{
        login: true
    })

})
app.get('/editarProductos', (req, res) => {
    res.render('editarProductos',{
        login: true
    })
})


//direccionamiento a la pagina de anadirProductos
app.get('/anadirProducto', (req, res) => {
    res.render('anadirProducto',{
        login: true
    })

})
//direccionamiento a la pagina de vehiculos
app.get('/vehiculos', (req, res) => {
    res.render('vehiculos',{
        login: true
    })

})
//Direccionamiento a la pagina de ediccion de vehiculos
app.get('/editarVehiculos', (req, res) => {
    res.render('editarVehiculos',{
        login: true
    })

})

//direccionamiento a la pagina de anadirVehiculos
app.get('/anadirVehiculos', (req, res) => {
    res.render('anadirVehiculos',{
        login: true
    })

})
//direccionamiento a la pagina de cotizaciones
app.get('/cotizaciones', (req, res) => {
    res.render('cotizaciones',{
        login: true
    })

})
//Direccionamiento a la pagina de cotizaciones
app.get('/editarCotizaciones', (req, res) => {
    res.render('editarCotizaciones',{
        login: true
    })

})
//direccionamiento a la pagina de anadirCotizaciones
app.get('/anadirCotizaciones', (req, res) => {
    res.render('anadirCotizaciones',{
        login: true
    })

})

//direccionamiento a la pagina de gestion de compras 
app.get('/gestionCompras', (req, res) => {
    res.render('gestionCompras',{
        login: true
    })

})
//Direccionamiento a la pagina de edicion de la compra
app.get('/editarCompras', (req, res) => {
    res.render('editarCompras',{
        login: true
    })
})
//direccionamiento a la pagina de anadirCompra
app.get('/anadirCompra', (req, res) => {
    res.render('anadirCompra',{
        login: true
    })

})
//Direccionamiento a la pagina de edicion del proveedor
app.get('/editarProveedor', (req, res) => {
    res.render('editarProveedor',{
        login: true
    })

})
//direccionamiento a la pagina de proveedor
app.get('/proveedor', (req, res) => {
    res.render('proveedor',{
        login: true
    })

})
//direccionamiento a la pagina de anadirProveedor
app.get('/anadirProveedor', (req, res) => {
    res.render('anadirProveedor',{
        login: true
    })

})

//direccionamiento a la pagina de clientes
app.get('/clientes', (req, res) => {
    res.render('clientes',{
        login: true
    })

})
//direccionamiento a la pagina de anadirCliente
app.get('/anadirCliente', (req, res) => {
    res.render('anadirCliente',{
        login: true
    })

})

//direccionamiento a la pagina de gestionServicio
app.get('/gestionServicio', (req, res) => {
    res.render('gestionServicio',{
        login: true
    })

})

//direccionamiento a la pagina de categoriaServicio
app.get('/categoriaServicio', (req, res) => {
    res.render('categoriaServicio',{
        login: true
    })

})

//direccionamiento a la pagina de empleado
app.get('/empleado', (req, res) => {
    res.render('empleado',{
        login: true
    })

})

//direccionamiento a la pagina de venta servicios 
app.get('/ventaServicios', (req, res) => {
    res.render('ventaServicios',{
        login: true
    })

})

//direccionamiento a la pagina de venta productos
app.get('/ventaProductos', (req, res) => {
    res.render('ventaProductos',{
        login: true
    })

})

//direccionamiento a la pagina de anadirServicio
app.get('/anadirServicio', (req, res) => {
    res.render('anadirServicio',{
        login: true
    })

})

//direccionamiento a la pagina de anadirCategoria
app.get('/anadirCategoria', (req, res) => {
    res.render('anadirCategoria',{
        login: true
    })

})

//direccionamiento a la pagina de anadirEmpleado
app.get('/anadirEmpleado', (req, res) => {
    res.render('anadirEmpleado',{
        login: true
    })

})

//direccionamiento a la pagina de añadir venta servicios
app.get('/anadirVentaS', (req, res) => {
    res.render('anadirVentaS',{
        login: true
    })

})

//direccionamiento a la pagina de añadir venta productos
app.get('/anadirVentaP', (req, res) => {
    res.render('anadirVentaP',{
        login: true
    })

})

//direccionamiento a la pagina de agendamiento
app.get('/agendamiento', (req, res) => {
    res.render('agendamiento',{
        login: true
    })

})
//direccionamiento a la pagina de editarGestionServicio
app.get('/editarGestionServicio', (req, res) => {
    res.render('editarGestionServicio',{
        login: true
    })

})

//direccionamiento a la pagina de editarCategoria
app.get('/editarCategoria', (req, res) => {
    res.render('editarCategoria',{
        login: true
    })

})

//direccionamiento a la pagina de editarEmpleado
app.get('/editarEmpleado', (req, res) => {
    res.render('editarEmpleado',{
        login: true
    })

})

//direccionamiento a la pagina de editar venta productos
app.get('/editarVentaP', (req, res) => {
    res.render('editarVentaP',{
        login: true
    })

})

//direccionamiento a la pagina de editar venta servicios
app.get('/editarVentaS', (req, res) => {
    res.render('editarVentaS',{
        login: true
    })

})


//direccionamiento a la pagina de editarClientes
app.get('/editarClientes', (req, res) => {
    res.render('editarClientes',{
        login: true
    })

})
// app.get('/menu',(req,res)=>{
//     //res.sendFile(__dirname+'/public/contacto.hbs')
//     res.render('menu',{

//     })
// })

app.get('*', (req, res) => {
    res.render('404', {
        login: false
    })
})
//Metodos HHTTP:

//GET = CONSULTAR
//POST = INSERTAR
//PUT =MODIFICAR
//DELETE = ELIMINAR

//HTTP: hypertextransferprotocol





//La pagina que por defecto se cargará 
app.get('/', (req, res) => {
    res.render('index', {
        titulo: 'indexC'
    })

})



app.get('*', (req, res) => {
    res.render('404')
})



