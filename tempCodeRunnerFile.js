//Importando librerias o paquetes
const express= require('express')
//instalar hbs: motor de plantillas de node
const hbs=require('hbs')

const path=require('path')

const app= express() //Especificar la funcion 

const port= 8181 //Definir el puerto de la aplicacion


//Directorio de paginas estaticas
app.use(express.static('public'))



///Configuracion de vistas del hbs
app.set('views',path.join(__dirname+'/public/views'))


app.set('view engine','hbs')

//Escuchar el puerto
app.listen(port,()=>{
    console.log(`Escuchando por el puerto ${port}`)
})

//La pagina que por defecto se cargará 
app.get('/',(req,res)=>{
    //ENVIO DE PAGINAS POR MEDIO DE .HTML 
    //res.sendFile(__dirname+'/public/home.hbs')
    res.render('home', {
        titulo:'Home',
        nombre: ' Emanuel Zapaa'
    })
    
})
//ERROR 404
app.get('*',(req,res)=>{
    res.render('404')
})
//Pagina contacto
app.get('/contacto',(req,res)=>{
    //res.sendFile(__dirname+'/public/contacto.hbs')
    res.render('contacto',{
        contacto: 3050488022,
        ubicacion: "Calle 77C #92.33"
    })
})

app.get('/mision',(req,res)=>{
    res.render('mision')
})

//Metodos HHTTP:

//GET = CONSULTAR
//POST = INSERTAR
//PUT =MODIFICAR
//DELETE = ELIMINAR

//HTTP: hypertextransferprotocol