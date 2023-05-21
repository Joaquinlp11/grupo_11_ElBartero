
const footerController = {


    getArrepentimiento : ( req , res ) =>{
    
        res.render ( 'foo-arrepentimiento');
        
    },

    getContacto : ( req , res ) =>{
 
        res.render ( 'foo-contacto');
    
    },

    getCambiosDevoluciones :  ( req , res ) =>{
    
        res.render ( 'foo-cambiosDevoluciones');
    
    },

    getPoliticasPrivacidad : ( req , res ) =>{
    
        res.render ( 'foo-politicasPrivacidad');
        
    },

    getTerminosCondiciones : ( req , res ) =>{

        res.render ( 'foo-terminosCondiciones');
        
    },

    getPreguntasFrecuentes : ( req , res ) =>{
    
        res.render ( 'foo-preguntasFrecuentes');
    
    },

    getPreguntasBlog : ( req , res ) =>{
    
        res.render ( 'foo-preguntasBlog');
    
    },

    getTransporte : ( req , res ) =>{
    
        res.render ( 'foo-transporte');
    
    },

    getContratacion :  ( req , res ) =>{

        res.render ( 'foo-contratacion');
    
    },

}


module.exports = footerController;