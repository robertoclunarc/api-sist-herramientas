import express, {Application} from "express";
import db from "./database/db";
import indexRoutes from "./api/routes/index.routes";
import morgan from "morgan";
import cors from "cors";


import categoriaRoutes from "./api/routes/categorias.route";
import usuarioRoutes from "./api/routes/usuarios.route";
import detalleentradaRoutes from "./api/routes/detallesentradas.route";
import detallepedidoRoutes from "./api/routes/detallespedidos.route";
import devolucioneRoutes from "./api/routes/devoluciones.route";
import entradaRoutes from "./api/routes/entradas.route";
import herramientaRoutes from "./api/routes/herramientas.route";
import pedidoRoutes from "./api/routes/pedidos.route";
import solicitanteRoutes from "./api/routes/solicitantes.route";


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
        this.app.use(usuarioRoutes);
        this.app.use(detalleentradaRoutes);
        this.app.use(detallepedidoRoutes);
        this.app.use(devolucioneRoutes);
        this.app.use(entradaRoutes);
        this.app.use(herramientaRoutes);
        this.app.use(pedidoRoutes);
        this.app.use(solicitanteRoutes);
    }
}

    const servidor = new Servidor();
    servidor.start();