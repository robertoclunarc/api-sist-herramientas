import { indexController } from "../controllers/index.controller";
import { Router } from "express";

class IndexRoutes {
    public router: Router = Router();

    constructor(){
        this.config()
    }

    config(): void{
        this.router.get('/', indexController.index )
    }
}

const indexRoutes=new IndexRoutes;
export default indexRoutes.router;