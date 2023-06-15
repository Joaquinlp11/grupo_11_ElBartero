
const fs = require('fs');
const path = require ('path');


const model={

    //Ruta de archivo json

    route: '../data/users.json',

    // Funciones

    //Traer mercaderias

    findAll: function(){

        const usersJSON = fs.readFileSync( path.join(__dirname, this.route),'utf-8');

        const users = JSON.parse(usersJSON);

        return users;
    },

    //Traer una mercaderia segun ID

    findByEmail: function(email){
    
        let users = this.findAll();

        let searched =users.find(elemento=>elemento.email===email);

        if(!searched){

            searched = null;
        }
       
        return searched;

    },
    
    //Eliminar una mercaderia segun ID
    
    deleteByEmail: function(email){

        let users =this.findAll();

        users = users.filter( elemento => elemento.email !==email);

        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, this.route),usersJSON);

        return users;

    },
    //Editar una mercaderia segun ID

    updateByEmail: function(email, newData){

        const users = this.findAll();

        const user = users.find(elemento=>elemento.email === email);

        const index = users.indexOf(user);

        users[index] = {

            email: users[index].email,
            title: newData.title,

        }

        const usersJSON =JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname,this.route),usersJSON);

        return users;

    },

    //Agregar producto

    createOne: function(newUser){

        let users = this.findAll();
        
        users.push(newUser); 

        const usersJSON = JSON.stringify(users);

        fs.writeFileSync(path.join(__dirname, this.route), usersJSON);
        
        return newUser;

    }
}


module.exports = model;