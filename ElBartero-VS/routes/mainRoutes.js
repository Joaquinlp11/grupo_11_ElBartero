
const express = require ('express')


const controlador = require('../controllers/controlador.js');

const router = express.Router();


router.get ( '/home' , controlador.getIndex );


router.get ( '/instructivo' , controlador.getInstructivo );

router.get ( '/balanza' , controlador.getBalanza );


router.get ( '/subasta' , controlador.getSubasta );


router.get ( '/valoracion' , controlador.getValoracion );


router.get ( '/canasta' , controlador.getCanasta );





module.exports = router;