
const express = require ('express');

const router = express.Router();

const productController = require ('../controllers/productController.js');



// @get /mercadocomercial
router.get ( '/mercadocomercial' , productController.getMercadoComercial );

//@get /mercadocomercialmercaderias
router.get ( '/mercadocomercialmercaderias' , productController.getMercadoComercialMercaderias );

// @get /mercadocomercial/mercadocomercialmercaderias/mercaderiaenexhibicion
router.get ( '/mercaderiaenexhibiciondetalle' , productController.getMercaderiaExhibidaDetalle );


/* lAs mercaderias son creadas desde la cuenta de marcas */
//@get /mercadocomercial/mercaderiaenexhibicon/creaciondemercaderia

router.get ( '/crearmercaderiamarcas' , productController.getCrearMercaderiaMarcas );

router.post ('/mercadocomercialmercaderias' , productController.postMercadoComercial);






// @get /mercadousuarios => Buscador de mercaderias principal
router.get ( '/mercadousuarios' , productController.getMercadoUsuarios );

//@get /mercadousuarios/mercaderiausuarios => Donde se dirigen las mercaderias
router.get ( '/mercadousuariosmercaderias' , productController.getMercadoUsuariosMercaderias );

//@post /mercadousuarios/mercaderiausuarios 
router.post ( '/mercadousuariosmercaderias' , productController.postMercaderiaUsuariosMercaderias );

/* las mercaderias son creadas desde la cuenta de usuarios */
// @get /useracount/crearmercaderia
router.get ( '/crearmercaderia' , productController.getCrearMercaderia );

// @get /mercadousuarios/:id/mercaderiausuariosdetalle
router.get ( '/:id/mercaderiausuariosdetalle' , productController.getMercaderiaUsuariosDetalle );

// @delete /mercadousuarios/:id/mercaderiausuarios => /mercadousuarios/delete
router.delete ( '/mercaderiausuariosdetalle/:id/delete' , productController.deleteMercaderiaUsuariosDetalle );


// @get /mercadousuarios/:id/mercaderiausuariosdetalle => /mercadousuarios/update
router.get ( '/mercaderiausuariosdetalle/:id/update' , productController.getUpdateMercaderiaUsuariosDetalle );

// @put /mercadousuarios/:id/mercaderiausuariosdetalle => /mercadousuarios/update
router.put ( '/mercaderiausuariosdetalle/:id/update' , productController.updateMercaderiaUsuariosDetalle );





/* otras paginas donde aparecen mercaderias segun clasificacion */

// @get /mercadousuarios/mercadousuariosoro
router.get ( '/mercadousuariosoro' , productController.getMercadoUsuariosOro );

// @get /mercadousuarios/mercadousuariosplata
router.get ( '/mercadousuariosplata' , productController.getMercadoUsuariosPlata );

// @get /mercadousuarios/mercadousuariosbronce
router.get ( '/mercadousuariosbronce' , productController.getMercadoUsuariosBronce );



/* La pagina de compra es la misma para todas las mercaderias */

// @get /mercadocomercial/ * search , * buscar por categorias , * buscar por rubro / comprarmercaderia
// @get /mercadousuarios /  * mercadousuariosoro , * mercadousuariosplata , * mercadousuariosbronce / comprarmercaderia

router.get ( '/comprarmercaderia' , productController.getComprarMercaderia );





module.exports = router;