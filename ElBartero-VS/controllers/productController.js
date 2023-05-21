
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


}


module.exports = productController;