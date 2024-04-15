import express, {Application} from "express";

export class Servidor {

    servidor: Application;

    constructor() {

        this.servidor = express();

    }

    setting() {

        
    }

    listen() {

        this.servidor.listen(console.log('Server on port', 3000))
    }
}

    const servidor = new Servidor();
    servidor.listen();