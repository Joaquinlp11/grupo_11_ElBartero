
const path = require( 'path');

const productController = {

    getMercadoComercial :( req , res ) =>{
    
        res.render ( 'mercadoComercial');
        
    },

    getMercadoUsuarios : ( req , res ) =>{
    
        res.render ( 'mercadoUsuarios');
        
    },

    getMercaderiaExhibida : ( req , res ) =>{
    
        res.render ( 'mercaderiaExhibida');
        
    },

    getMercaderiaUsuarios : ( req , res ) =>{
    
        res.render ( 'mercaderiaUsuarios');
        
    },

    getMercaderiaExhibidaId : (req,res)=>{

       let idProducto = req.params.id;

       res.render ()
    
    },

    getMercadoUsuariosOro : ( req,res)=>{

        res.render ('mercadoUsuariosOro');
    },

    getMercadoUsuariosPlata : ( req,res)=>{

        res.render ('mercadoUsuariosPlata');
    },

    getMercadoUsuariosBronce : ( req,res)=>{

        res.render ('mercadoUsuariosBronce');
    }



}


module.exports = productController;