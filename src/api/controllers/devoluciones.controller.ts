import { Request, Response } from "express";
import Devolucione from "../models/devoluciones.models";
import db from "../../database/db";

export async function getDevolucione(req: Request, res: Response): Promise< void > {
    
    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM devoluciones');
            if(!result) {
                res.status(200).json({message: 'Sin resultados'})
            }
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getDevolucione'})
    }
}

export async function getDevolucionePorId(req: Request, res: Response) {

    const iddevolucion = req.params.id;
    let devoluciones: Devolucione[]=[];
    let result: any

    try {
        result = await db.querySelect('SELECT * FROM devoluciones WHERE iddevolucione = ?', [iddevolucion]);
            if(!result) {
                res.status(200).json({message: 'No hay resultados'})
            }
            devoluciones = result
            res.status(200).json(devoluciones)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getDevolucionePorId'})
    }    
}

export async function createDevolucione(req: Request, res: Response) {

    const devoluciones: Devolucione = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO devoluciones SET ?', [devoluciones]);
        devoluciones.iddevolucion = result.insertId
        res.status(200).json({
            message: 'Se registro correctamente',
            id: devoluciones.iddevolucion
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createDevolucione'})
    }
}

export async function updateDevolucione(req: Request, res: Response) {

    const iddevolucion = req.params.id;
    const update: Devolucione = req.body;
    let devoluciones: Devolucione[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE devoluciones SET ? WHERE iddevolucione = ?', [update, iddevolucion]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'});
            }
            devoluciones = result
            res.status(200).json({message: 'Se actualizo conrrectamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateDevolucione'})
    }
    
}

export async function deleteDevolucione(req: Request, res: Response) {

    const iddevolucion = req.params.id;
    let devoluciones: Devolucione[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM devoluciones SET ? WHERE iddevolucione = ?', [iddevolucion]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            devoluciones = result
            res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteDevolucione'})
    }
}