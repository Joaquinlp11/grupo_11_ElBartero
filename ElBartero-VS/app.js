
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


app.get ( '/balanza' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/balanza.html'));

});

app.get ( '/cuentadeusuario' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/cuentaDeUsuario.html'));

});

app.get ( '/mercaderiaenexhibicion' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/mercaderiaExhibida.html'));

});


app.get ( '/arrepentimientodeactividades' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/foo-arrepentimiento.html'));

});

app.get ( '/contacto' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/foo-contacto.html'));

});

app.get ( '/mercadocomercial' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/mercadoComercial.html'));
    
});

app.get ( '/mercadodeusuarios' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/mercadoDeUsuarios.html'));
    
});

app.get ( '/iniciarsesion' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/signIn.html'));
    
});

app.get ( '/registrarse' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/signUp.html'));
    
});

app.get ( '/subasta' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/subasta.html'));
    
});

app.get ( '/valoracion' , ( req , res ) =>{

    res.sendFile ( path.join (__dirname , 'views/valoracion.html'));
    
});





