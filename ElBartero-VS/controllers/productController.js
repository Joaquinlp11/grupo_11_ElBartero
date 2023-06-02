
const path = require( 'path');

let mercaderia= [

        {
            id: 1,
            title: 'Licuadora',
            price: 50000,
            img: "/images/Licuadora.jpeg"
            
        },
        {
            id:2,
            title: 'Tostadora',
            price: 80000,
            

        },
        {
            id:3,
            title: 'Lavarropas',
            price: 500000,

        }

];

let mercaderiaMarcas =[

    {
        id:1,
        title: 'Plancha',
        price: 80000,

    }
]


const productController = {

    /* Mercado comercial */
    getMercadoComercial :( req , res ) =>{
    
        res.render ( 'mercadoComercial' , { title : 'Mercado comercial'});
        
    },

    /* Mercado comercial Mercaderias */
    getMercadoComercialMercaderias : (req,res)=>{

        res.render ('mercadoComercialUno', {title : 'Mercado comercial'})
    },
    
    /* Detalle de mercaderia en mercado comercial */
    getMercaderiaExhibidaDetalle : ( req , res ) =>{
        
        res.render ( 'mercaderiaExhibidaDetalle' , { title : 'Mercaderia Exhibida'});
        
    },
    
    /* Creamos la pagina de crear mercaderia, marcas , desde usuario marcas*/
    getCrearMercaderiaMarcas : (req,res)=>{

        res.render ( 'crearMercaderiaMarcas' ,{title:'Crear mercaderia marcas'})
    },

    /* Envia a mercado cmercial, formulario */
    postMercadoComercial :(req,res) =>{

        const datosMarcas = req.body;

        datosMarcas.id = mercaderiaMarcas.length +1;

        mercaderiaMarcas.push(datosMarcas);


        res.redirect('/mercadocomercialmercaderias');
    },


    //************* 
    
    /* Se diferencian los mercados de usuarios y comercial */
    
    //************* 



    /* Mercado de usuarios */
    getMercadoUsuarios : ( req , res ) =>{
        
        res.render ( 'mercadoUsuarios' , { title : 'Mercado de Usuarios' , mercaderia });
            
    },
    /* Mercado de usuarios Mercaderias */

    getMercadoUsuariosMercaderias : ( req , res ) =>{

        
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

        /* Buscamos en el array de productos, igual al id por params */
        const mercaderiaAMostrar = mercaderia.find(elemento=> elemento.id ===id);

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
        /* Se explica como matchear el id que sea diferente al seleccionado */
        /* El id que coincida se descarta */
        mercaderiasAcualizadas = mercaderia.filter(elemento =>elemento.id !== id);

        mercaderia = mercaderiasAcualizadas;

        res.redirect ( '/mercadousuariosmercaderias');
    },


     /* Edicion de mercaderia */
     getUpdateMercaderiaUsuariosDetalle: (req,res)=>{
        
        const id = Number(req.params.id);

        const mercaderiaAEditar = mercaderia.find ( elemento => elemento.id === id);

        if(!mercaderiaAEditar){

            return res.send('La mercaderia no fue identificada');
        };

        res.render ( 'updateMercaderia' , { title:'Update Mercaderia', mercaderia: mercaderiaAEditar });

    },

    updateMercaderiaUsuariosDetalle: (req,res)=>{

        const id=Number(req.params.id);
        const datosEditados = req.body;

        const mercaderiaAEditar = mercaderia.find(elemento=> elemento.id === id);

        //buscamos el indice de la mercaderia para modificarla
        //en este ejemplo usamos indexof

        const indice = mercaderia.indexOf(mercaderiaAEditar);
        /* encontramos el indice y lo guardamos en la variable */
        /* de esta manera asignamos el indice del objeto y utilizamos las asignaciones para modificar */

        mercaderia[indice].title = datosEditados.title;
        mercaderia[indice].price = datosEditados.price;
        

        res.redirect( '/mercadousuariosmercaderias');

    },

    
    /* Creacion desde la cuenta usuarios */
    /* Envia a mercado de usuarios, formulario */
    postMercaderiaUsuariosMercaderias: (req,res)=>{
        
        const datos = req.body;
        
        mercaderia.push(datos);
        
        datos.id = mercaderia.length +1;
    
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