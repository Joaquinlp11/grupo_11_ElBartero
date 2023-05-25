
const express = require ('express');

const router = express.Router();

const productController = require ('../controllers/productController.js');



router.get ( '/mercadocomercial' , productController.getMercadoComercial );


router.get ( '/mercadousuarios' , productController.getMercadoUsuarios );


router.get ( '/mercaderiaenexhibicion' , productController.getMercaderiaExhibida );


router.get ( '/mercaderiausuarios' , productController.getMercaderiaUsuarios );


router.get ( '/mercaderiaenexhibicion/:id', productController.getMercaderiaExhibidaId)



module.exports = router;