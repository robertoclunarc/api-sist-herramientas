import { Request, Response } from "express";

class IndexControler{
    public index (req: Request, res: Response){
        res.json({text: 'Los APIs estan en /sistherramientas'})
    }
}

export const indexController = new IndexControler();