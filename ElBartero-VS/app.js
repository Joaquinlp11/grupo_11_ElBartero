
const express = require ( 'express' );
const app = express();

const path = require ('path');

const publicPath = path.join (__dirname, './public');


const mainRoutes = require ('./routes/mainRoutes.js');
const productRoutes = require ('./routes/productRoutes.js');
const userRoutes = require ( './routes/userRoutes.js');
const footerRoutes = require ('./routes/footerRoutes.js');


app.use ( mainRoutes);
app.use (productRoutes);
app.use ( userRoutes);
app.use ( footerRoutes);



app.set('view engine' , 'ejs');


app.set ('views' , [ 
    path.join(__dirname,'./views/main'),
    path.join(__dirname,'./views/productos'),
    path.join(__dirname, './views/users'),
    path.join (__dirname,'./views/footer'),

]);



app.use ( express.static ( publicPath));



app.listen ( 3002 , ()=>{
    
    console.log ( 'Servidor corriendo');
});

