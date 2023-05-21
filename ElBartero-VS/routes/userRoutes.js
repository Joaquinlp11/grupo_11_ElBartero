
const express = require ('express');

const userController = require ( '../controllers/userController.js');

const router = express.Router();



router.get ( '/signin' , userController.getSignIn );


router.get ( '/signup' , userController.getSignUp );
    

router.get ( '/useracount' , userController.getUserAcount );



module.exports = router;