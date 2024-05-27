import { Request, Response } from "express";
import Herramientas from "../models/herramientas.models";
import db from "../../database/db";

export async function getHerramienta(req: Request, res: Response): Promise< void > {
    let result: any
    try {
        result = await db.querySelect('SELECT * FROM herramientas');
        console.log(result);
            if(!result) {
                res.status(200).json({message: 'Sin resultados'})
            }
        const herramientas: Herramientas[] = result;
        res.status(200).json(herramientas);    
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getHerramienta'})
    }    
}

export async function getHerramientaPorId(req: Request, res: Response) {

    const ideherramienta = req.params.id;
    let herramientas: Herramientas[]=[];
    let result: any;
    
    try {
        result = await db.querySelect('SELECT * FROM herramientas SET ? WHERE idherramienta', [ideherramienta]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            herramientas = result
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getHerramientaPorId'})
    }
}

export async function createHerramienta(req: Request, res: Response) {

    const herramientas: Herramientas = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO herramientas SET ?', [herramientas]);
        herramientas.idherramienta = result.insertId;
        res.status(200).json({
            message: 'Se registro exitosamente',
            id: herramientas.idherramienta
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createHerramienta'})
    }
    
}

export async function updateHerramienta(req: Request, res: Response) {

    const ideherramienta = req.params.id;
    const update: Herramientas = req.body;
    let herramientas: Herramientas[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE herramientas SET ? WHERE idherramienta = ?', [update, ideherramienta]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'})
            }
            herramientas = result
            res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateHerramienta'})
    }
}

export async function deleteHerramienta(req: Request, res: Response) {

    const idherramienta = req.params.id;
    let herramientas: Herramientas[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM herramientas SET ? ideherramienta = ?', [idherramienta]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            herramientas = result;
            res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteHerramienta'})
    }
    
}
