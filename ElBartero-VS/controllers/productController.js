
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
    
    }


}


module.exports = productController;