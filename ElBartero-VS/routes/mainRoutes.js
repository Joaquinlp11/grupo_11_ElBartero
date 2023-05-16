
const express = require ('express')
const path = require ('path')

const controlador = require('../controllers/controlador.js');

const router = express.Router();



router.get ( '/home' , controlador.index)






module.exports = router;