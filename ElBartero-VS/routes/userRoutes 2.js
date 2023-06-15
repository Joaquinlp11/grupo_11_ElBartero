
const express = require ('express');

const userController = require ( '../controllers/userController.js');

const router = express.Router();

const validationsUserMiddleware = require('../middlewares/validationUser.js');
const validationsUserMarcaMiddleware = require('../middlewares/validationUserMarca.js');


//@get /signin
router.get ( '/signin' , userController.getSignIn );

//@get /signup
router.get ( '/signup' , userController.getSignUp );

//@post /signup
router.post ( '/signup' , validationsUserMiddleware.validateCreateUser ,userController.postSignUp );


//@get /signupmarca
router.get ( '/signupmarca' , userController.getSignUpMarca );

//@post /signupmarca
router.post ( '/signupmarca' , validationsUserMarcaMiddleware.validateCreateUserMarca ,userController.postSignUpMarca );


//@get /useracount
router.get ( '/useracount' , userController.getUserAcount );

//@get /useracountmarcas
router.get ( '/useracountmarcas' , userController.getUserAcountMarcas );


module.exports = router;