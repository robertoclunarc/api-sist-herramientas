import express, {Application} from "express";
import db from "./database/db";
import indexRoutes from "./api/routes/index.routes";
import morgan from "morgan";
import cors from "cors";
import categoriaRoutes from "./api/routes/categorias.route";

export class Servidor {

    app: Application

    constructor() {

        this.app = express();
        this.config();
        this.routes();
    }    

    start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor Ejecutandose en el puerto: ', this.app.get('port'));
            db.conectarBd();
        })
        
    }

    config() {
        this.app.set('port', process.env.PORT || 3200);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use(indexRoutes);
        this.app.use(categoriaRoutes);
    }
}

    const servidor = new Servidor();
    servidor.start();