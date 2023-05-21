
const path = require ('path')


const controlador= {

    getIndex: ( req , res )=>{

        res.render ( 'index');
    },


    getBalanza : ( req , res ) =>{
    
        res.render ('balanza');
    
    },

    getSubasta : ( req , res ) =>{
    
        res.render ('subasta');
        
    },

    getValoracion : ( req , res ) =>{
    
        res.render ( 'valoracion');
        
    },

    getCanasta : ( req , res ) =>{

        res.render ( 'canasta');
        
    },

}




module.exports= controlador;