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
        this.app.set('port', process.env.PORT || 2200);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }

    routes():void{
        this.app.use('/', indexRoutes);
        this.app.use('/sistherramientas/categoria', categoriaRoutes);
        this.app.use('/sistherramientas/login', usuarioRoutes);
        this.app.use('/sistherramientas/detalleentrada', detalleentradaRoutes);
        this.app.use('/sistherramientas/detallepedido', detallepedidoRoutes);
        this.app.use('/sistherramientas/devoluciones', devolucioneRoutes);
        this.app.use('/sistherramientas/entrada', entradaRoutes);
        this.app.use('/sistherramientas/herramienta', herramientaRoutes);
        this.app.use('/sistherramientas/pedido', pedidoRoutes);
        this.app.use('/sistherramientas/solicitante', solicitanteRoutes);
    }
}

    const servidor = new Servidor();
    servidor.start();