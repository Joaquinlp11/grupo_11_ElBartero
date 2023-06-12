
const { randomUUID } = require('crypto');
const path = require ('path')

const usersModel = require('../models/user')
const usersMarcasModel = require('../models/userMarca')

const expressValidator = require('express-validator');


userController={

    getSignIn : ( req , res ) =>{
    
        res.render ( 'signIn' , {title : 'Iniciar Sesion'} );
    },


    getSignUp : ( req , res ) =>{
    
        res.render ('signUp' , {title: 'Registracion' , errors:[]});

    },
    
    postSignUp : ( req , res ) =>{
        
        const newUser = req.body;

        const validation= expressValidator.validationResult(req);

        if(validation.errors.length >0){

            return res.render( 'signUp' , { title:'Sign up', errors: validation.errors} )
        }
        
        usersModel.createOne(newUser);
        
        res.redirect('/useracount');
    },
    

    getSignUpMarca : ( req , res ) =>{
    
        res.render ('signUpMarca' , {title: 'Registracion de Marca', errors:[]});

    },

    postSignUpMarca : ( req , res ) =>{
    
        const newUserMarca = req.body;

        const validation= expressValidator.validationResult(req);

        if(validation.errors.length >0){

            return res.render( 'signUpMarca' , { title:'Sign up Marca', errors: validation.errors} )
        }


        usersMarcasModel.createOne(newUserMarca);

        res.redirect('/useracountmarcas')

    },
    


    getUserAcount : ( req , res ) =>{
    
        res.render ( 'userAcount', { title : 'Usuarios'});
        
    },

    getUserAcountMarcas : ( req , res ) =>{
    
        res.render ( 'usersAcountMarcas', { title : 'Marcas'});
        
    },


}

module.exports = userController;