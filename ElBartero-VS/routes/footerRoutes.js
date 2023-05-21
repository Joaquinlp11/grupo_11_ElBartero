
const express = require ('express');

const routes = express.Router();

const footerController = require ('../controllers/footerController.js');
const router = require('./mainRoutes');


router.get ( '/arrepentimientodeactividades' , footerController.getArrepentimiento );


router.get ( '/contacto' , footerController.getContacto );


router.get ( '/cambiosydevoluciones' , footerController.getCambiosDevoluciones);


router.get ( '/politicasdeprivacidad' , footerController.getPoliticasPrivacidad );


router.get ( '/terminosycondiciones' , footerController.getTerminosCondiciones );


router.get ( '/preguntasfrecuentes' , footerController.getPreguntasFrecuentes );


router.get ( '/preguntasblog' , footerController.getPreguntasBlog );


router.get ( '/transporte' , footerController.getTransporte );


router.get ( '/contratacion' , footerController.getContratacion );



module.exports= router;