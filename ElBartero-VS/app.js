
const express = require ( 'express' );
const app = express();
const path = require ('path');


const publicPath = path.join (__dirname, './public');

app.use ( express.static ( publicPath));


app.listen ( 3002 , ()=>{
    
    console.log ( 'Servidor corriendo');
});




app.get ('/home' , ( req , res )=>{

    res.sendFile ( path.join ( __dirname , '/views/index.html'));
});


/*  Registrarse e inicio de sesion Abre */

app.get ( '/iniciosesion' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/signIn.html'));
    
});


app.get ( '/registrarse' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/signUp.html'));
    
});

/*  Registrarse e inicio de sesion Cierra */


app.get ( '/cuentadeusuario' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/cuentaDeUsuario.html'));
    
});


app.get ( '/mercadocomercial' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/mercadoComercial.html'));
    
});

app.get ( '/mercadodeusuarios' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/mercadoDeUsuarios.html'));
    
});

/* mercaderias en exhibicion  Abre */

app.get ( '/mercaderiaenexhibicion' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/mercaderiaExhibida.html'));
    
});


app.get ( '/mercaderiausuarios' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/mercaderiaUsuarios.html'));
    
});

/* mercaderias en echibicion Cierra */



/*  Balanza - Subasta - valoracion - Canasta  Abre */

app.get ( '/balanza' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/balanza.html'));

});

app.get ( '/subasta' , ( req , res ) =>{
    
    res.sendFile ( path.join (__dirname , 'views/subasta.html'));
    
});

app.get ( '/valoracion' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/valoracion.html'));
    
});

app.get ( '/canasta' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/canasta.html'));
    
});

/* balanza - subasta - valoracion - canasta  Cierra */

/* Footer */

app.get ( '/arrepentimientodeactividades' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/foo-arrepentimiento.html'));

});

app.get ( '/contacto' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/foo-contacto.html'));

});

app.get ( '/cambiosydevoluciones' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/cambiosDevoluciones.html'));

});

app.get ( '/politicasdeprivacidad' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/politicasPrivacidad.html'));

});

app.get ( '/terminosycondiciones' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/terminosCondiciones.html'));

});


app.get ( '/preguntasfrecuentes' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/preguntasFrecuentes.html'));

});

app.get ( '/preguntasblog' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/preguntasBlog.html'));

});


app.get ( '/transporte' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/transporte.html'));

});

app.get ( '/contratacion' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/contratacion.html'));

});




