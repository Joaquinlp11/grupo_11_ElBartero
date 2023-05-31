
const path = require ('path')

userController={

    getSignIn : ( req , res ) =>{
    
        res.render ( 'signIn' , );
    },

    getSignUp : ( req , res ) =>{
    
        res.render ('signUp');

    },

    getUserAcount : ( req , res ) =>{
    
        res.render ( 'userAcount', { title : 'Usuarios'});
        
    },
    
    getUserAcountMarcas : ( req , res ) =>{
    
        res.render ( 'usersAcountMarcas', { title : 'Marcas'});
        
    },


}

module.exports = userController;