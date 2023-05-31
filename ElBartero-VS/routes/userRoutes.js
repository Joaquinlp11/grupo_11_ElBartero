
const express = require ('express');

const userController = require ( '../controllers/userController.js');

const router = express.Router();


//@get /home/signin
router.get ( '/signin' , userController.getSignIn );

//@get /home/signup
router.get ( '/signup' , userController.getSignUp );

//@get /home/useracount
router.get ( '/useracount' , userController.getUserAcount );

//@get /home/useracountmarcas
router.get ( '/useracountmarcas' , userController.getUserAcountMarcas );


module.exports = router;