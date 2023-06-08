
const { randomUUID } = require('crypto');
const path = require ('path')

const usersModel = require('../models/user')
const usersMarcasModel = require('../models/userMarca')

userController={

    getSignIn : ( req , res ) =>{
    
        res.render ( 'signIn' , {title : 'Iniciar Sesion'} );
    },


    getSignUp : ( req , res ) =>{
    
        res.render ('signUp' , {title: 'Registracion'});

    },

    postSignUp : ( req , res ) =>{
    
        const newUser = req.body;

        usersModel.createOne(newUser);

        res.redirect('/useracount');
    },

    getUserAcount : ( req , res ) =>{
    
        res.render ( 'userAcount', { title : 'Usuarios'});
        
    },

    getUserAcountMarcas : ( req , res ) =>{
    
        res.render ( 'usersAcountMarcas', { title : 'Marcas'});
        
    },


}

module.exports = userController;