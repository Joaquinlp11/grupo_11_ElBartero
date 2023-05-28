
const path = require( 'path');

const productController = {

    getMercadoComercial :( req , res ) =>{
    
        res.render ( 'mercadoComercial' , { title : 'Mercado comercial'});
        
    },

    getMercadoUsuarios : ( req , res ) =>{
    
        res.render ( 'mercadoUsuarios' , { title : 'Mercado de Usuarios'});
        
    },

    getMercaderiaExhibida : ( req , res ) =>{
    
        res.render ( 'mercaderiaExhibida' , { title : 'Mercaderia Exhibida'});
        
    },

    getMercaderiaUsuarios : ( req , res ) =>{
    
        res.render ( 'mercaderiaUsuarios' , { title : 'Mercaderia de usuarios'});
        
    },


    getMercadoUsuariosOro : ( req,res)=>{

        res.render ('mercadoUsuariosOro' , { title : 'Mercado de oro'});
    },

    getMercadoUsuariosPlata : ( req,res)=>{

        res.render ('mercadoUsuariosPlata' , { title : 'Mercado de plata'});
    },

    getMercadoUsuariosBronce : ( req,res)=>{

        res.render ('mercadoUsuariosBronce' , { title : 'Mercado de bronce'});
    },

    getComprarMercaderia : ( req,res)=>{

        res.render ('comprarMercaderia' , { title : 'Compra'});
    }



}


module.exports = productController;