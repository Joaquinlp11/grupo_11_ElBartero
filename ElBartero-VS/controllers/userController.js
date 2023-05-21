
const path = require ('path')

userController={

    getSignIn : ( req , res ) =>{
    
        res.render ( 'signIn');
    },

    getSignUp : ( req , res ) =>{
    
        res.render ('signUp');

    },

    getUserAcount : ( req , res ) =>{
    
        res.render ( 'userAcount');
        
    },


}

module.exports = userController;