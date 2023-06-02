
const path = require ('path')

userController={

    getSignIn : ( req , res ) =>{
    
        res.render ( 'signIn' , {title : 'Iniciar Sesion'} );
    },

    getSignUp : ( req , res ) =>{
    
        res.render ('signUp' , {title: 'Registracion'});

    },

    getUserAcount : ( req , res ) =>{
    
        res.render ( 'userAcount', { title : 'Usuarios'});
        
    },

    getUserAcountMarcas : ( req , res ) =>{
    
        res.render ( 'usersAcountMarcas', { title : 'Marcas'});
        
    },


}

module.exports = userController;