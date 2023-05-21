
const express = require ('express')


const controlador = require('../controllers/controlador.js');

const router = express.Router();


router.get ( '/home' , controlador.getIndex );


router.get ( '/balanza' , controlador.getBalanza );


router.get ( '/subasta' , controlador.getBalanza );


router.get ( '/valoracion' , controlador.getValoracion );


router.get ( '/canasta' , controlador.getCanasta );





module.exports = router;