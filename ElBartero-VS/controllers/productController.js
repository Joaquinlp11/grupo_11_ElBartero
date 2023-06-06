
const path = require( 'path');
const fs = require ('fs')

const mercaderiasModel = require ('../models/mercaderia');

const mercaderiasJSON = fs.readFileSync( path.join(__dirname, '../data/mercaderias.json'),'utf-8');
const mercaderia = JSON.parse(mercaderiasJSON);

console.log

/* 
let mercaderia=[

    {
        id: 1,
        title: 'Tostadora',
        price:1000
    }
] */

let mercaderiaMarcas=[
    {
        id: 1,
        title: 'Tostadora',
        price:1000,

    }
]


const productController = {

    /* Mercado comercial */
    getMercadoComercial :( req , res ) =>{

    
        res.render ( 'mercadoComercial' , { title : 'Mercado comercial' , mercaderiaMarcas});
        
    },

    /* Mercado comercial Mercaderias */
    getMercadoComercialMercaderias : (req,res)=>{


        res.render ('mercadoComercialUno', {title : 'Mercado comercial' , mercaderiaMarcas})
    },
    


    /* Detalle de mercaderia en mercado comercial */
    getMercaderiaExhibidaDetalle : ( req , res ) =>{
        
        const id = Number(req.params.id);

        const mercaderiaMarcasAMostrar = mercaderiaMarcas.find(elemento=> elemento.id ===id);

        if(!mercaderiaMarcasAMostrar){

            return res.send ('El id de la mercaderia no es valido');
        }

        res.render ('mercaderiaExhibidaDetalle' , { title:'Mercaderia' , mercaderiaMarcas:mercaderiaMarcasAMostrar});

    },

    
    /* Creamos la pagina de crear mercaderia, marcas , desde usuario marcas*/
    getCrearMercaderiaMarcas : (req,res)=>{

        res.render ( 'crearMercaderiaMarcas' ,{title:'Crear mercaderia marcas'})
    },

    /* Envia a mercado cmercial, formulario */
    postMercadoComercialMercaderias :(req,res) =>{

        const datosMarcas = req.body;
        
        datosMarcas.id = mercaderiaMarcas.length +1;
        datosMarcas.price = Number(datosMarcas.price);
        datosMarcas.img = '/uploadImages/imagenesmercaderiasmarcas' + req.file.filename;
        
        mercaderiaMarcas.push(datosMarcas);
        
        res.redirect('/mercadocomercialmercaderias');
    },

    deleteMercaderiaExhibidaDetalle: (req,res)=>{

        const id = Number(req.params.id);

        const mercaderiaMarcasActualizadas = mercaderiaMarcas.filter(elemento=>elemento.id !== id);

        mercaderiaMarcas = mercaderiaMarcasActualizadas;

        res.redirect('/mercadocomercialmercaderias')

    },
    
    getUpdateMercaderiaExhibidaDetalle: (req,res)=>{

        const id = Number(req.params.id);

        const mercaderiaMarcasAModificar = mercaderiaMarcas.find(elemento=> elemento.id ===id);

        if(!mercaderiaMarcasAModificar){

            return res.send('El id de la mercaderia no es valido');
        };

        res.render ( 'updateMercaderiaMarcas' , {title : 'Editar Mercaderia', mercaderiaMarcas : mercaderiaMarcasAModificar})

    },

    updateMercaderiaExhibidaDetalle:(req,res)=>{

        const id = Number(req.params.id);
        const datosEditadosMarcas = req.body;

        const mercaderiaMarcasAEditar = mercaderiaMarcas.find(elemento=> elemento.id === id);

        const indice = mercaderiaMarcas.indexOf(mercaderiaMarcasAEditar);

        mercaderiaMarcas[indice].title = datosEditadosMarcas.title;
        mercaderiaMarcas[indice].price = datosEditadosMarcas.price;
        mercaderiaMarcas[indice].description = datosEditadosMarcas.description;

        res.redirect('/mercadocomercialmercaderias');
    },
    

    //************* 
    
    /* Se diferencian los mercados de usuarios y comercial */
    
    //************* 



    /* Mercado de usuarios */
    getMercadoUsuarios : ( req , res ) =>{

        const mercaderia = mercaderiasModel.findAll();
        
        res.render ( 'mercadoUsuarios' , { title : 'Mercado de Usuarios' , mercaderia });
            
    },
    /* Mercado de usuarios Mercaderias */

    getMercadoUsuariosMercaderias : ( req , res ) =>{

        const mercaderia = mercaderiasModel.findAll();
        
        res.render ( 'mercadoUsuariosUno' , { title : 'Mercado de Usuarios' , mercaderia });
        
    },
    
   
    /* Donde estaran las mercaderias de los usuarios */
    /* Mercado de usuarios Merado de oro */
    getMercadoUsuariosOro : ( req,res)=>{

        res.render ('mercadoUsuariosOro' , { title : 'Mercado de oro'});
    },

    /* Mercado de usuarios Mercado de Plata */
    getMercadoUsuariosPlata : ( req,res)=>{

        res.render ('mercadoUsuariosPlata' , { title : 'Mercado de plata'});
    },

    /* Mercado de usuarios Mercado de Bronce */
    getMercadoUsuariosBronce : ( req,res)=>{

        res.render ('mercadoUsuariosBronce' , { title : 'Mercado de bronce'});

    },




    /* Detalle de mercaderia en mercado de usuarios */
    getMercaderiaUsuariosDetalle : ( req , res ) =>{

        /* Agarramos id que nos pasaron por paramentro de ruta */
        const id = Number(req.params.id);

        const mercaderiaAMostrar = mercaderiasModel.findById(id);

        /* Buscamos en el array de productos, igual al id por params */
        /* const mercaderiaAMostrar = mercaderia.find(elemento=> elemento.id ===id); */

        /* Si es invalido muestra mensaje */
        if(!mercaderiaAMostrar){
        
            /* El return detiene ejecucion del controler */
            return res.send('El id de la mercaderia no es valida')
        }
        
        /* Renderizamos vista y le pasamos datos */
        res.render ( 'mercaderiaUsuariosDetalle' , { title : 'Mercaderia de usuarios' , mercaderia : mercaderiaAMostrar });
        
    },

    deleteMercaderiaUsuariosDetalle: ( req,res )=>{

        const id = Number(req.params.id);

        mercaderiasModel.deleteById(id);

        /* mercaderiasAcualizadas = mercaderia.filter(elemento =>elemento.id !== id); 
        mercaderia = mercaderiasAcualizadas;*/

        res.redirect ( '/mercadousuariosmercaderias');
    },


     /* Edicion de mercaderia */
     getUpdateMercaderiaUsuariosDetalle: (req,res)=>{
        
        const id = Number(req.params.id);

        const mercaderiaAEditar = mercaderiasModel.findById(id);

        /* Esto es antes de hacer las funciones en el models,mercaderia */
        /* const mercaderiaAEditar = mercaderia.find ( elemento => elemento.id === id); */

        if(!mercaderiaAEditar){

            return res.send('La mercaderia no fue identificada');
        };

        res.render ( 'updateMercaderia' , { title:'Editar Mercaderia', mercaderia: mercaderiaAEditar });

    },

    updateMercaderiaUsuariosDetalle: (req,res)=>{

        const id = Number(req.params.id);
        const datosEditados = req.body;

        mercaderiasModel.updateById(id, datosEditados);

     /*    const mercaderiaAEditar = mercaderia.find(elemento=> elemento.id === id);

        const indice = mercaderia.indexOf(mercaderiaAEditar);

        mercaderia[indice].title = datosEditados.title;
        mercaderia[indice].price = datosEditados.price;

 */
        res.redirect( '/mercadousuariosmercaderias');

    },

    
    /* Creacion desde la cuenta usuarios */
    /* Envia a mercado de usuarios, formulario */
    postMercaderiaUsuariosMercaderias: (req,res)=>{
        
        const newMercaderia = req.body;

        newMercaderia.price = Number(newMercaderia.price);
/*         newMercaderia.img = '/uploadImages/imagenesmercaderias' + req.file.filename; */
        
        mercaderiasModel.createOne(newMercaderia);

        /* mercaderia.push(datos);
        datos.id = mercaderia.length +1; */
    
        res.redirect('/mercadousuariosmercaderias');
     
    },
    
    /* Creamos la pagina de crear mercaderia, usuarios */
    getCrearMercaderia : (req,res)=>{
        
        res.render ('crearMercaderia' , {title:'Crear mercaderia'});

    },




    /* Comprar mercaderia, igual usuarios o comercios */
    getComprarMercaderia : ( req,res)=>{

        res.render ('comprarMercaderia' , { title : 'Compra'});
    }



}


module.exports = productController;