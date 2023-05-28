
const express = require ('express');

const router = express.Router();

const productController = require ('../controllers/productController.js');



router.get ( '/mercadocomercial' , productController.getMercadoComercial );


router.get ( '/mercadousuarios' , productController.getMercadoUsuarios );


router.get ( '/mercaderiaenexhibicion' , productController.getMercaderiaExhibida );


router.get ( '/mercaderiausuarios' , productController.getMercaderiaUsuarios );

router.get ( '/mercadousuariosoro' , productController.getMercadoUsuariosOro );
router.get ( '/mercadousuariosplata' , productController.getMercadoUsuariosPlata );
router.get ( '/mercadousuariosbronce' , productController.getMercadoUsuariosBronce );

router.get ( '/comprarmercaderia' , productController.getComprarMercaderia );




module.exports = router;