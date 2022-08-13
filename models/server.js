
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {    
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        // Middlewares
        this.middlewares();

        // routes
        this.routes();
    }

    middlewares() {
        // Public directory
        this.app.use( express.static('public') )
        // CORS
        this.app.use(cors());
        // Parse data body
        this.app.use(express.json())
    }

    routes() {
       
        this.app.use(this.usuariosPath, require('../routes/user')) 
    }

    listen() {
        this.app.listen(this.port, ()=> {
            console.log("Working on port " + this.port)
        })
        
    }

}




module.exports = Server;