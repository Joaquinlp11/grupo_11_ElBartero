
const express = require ('express');

const userController = require ( '../controllers/userController.js');

const router = express.Router();

//@get /signin
router.get ( '/signin' , userController.getSignIn );


//@get /signup
router.get ( '/signup' , userController.getSignUp );

//@post /signup
router.post ( '/signup' , userController.postSignUp );



//@get /useracount
router.get ( '/useracount' , userController.getUserAcount );

//@get /useracountmarcas
router.get ( '/useracountmarcas' , userController.getUserAcountMarcas );


module.exports = router;