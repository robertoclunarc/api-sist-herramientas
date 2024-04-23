import { Request, Response } from "express";
import Entrada from "../models/entradas.models";
import db from "../../database/db";

export async function getEntrada(req: Request, res: Response): Promise<void> {

    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM entradas');
            if(!result) {
                res.status(200).json({message: 'Sin resultados'})
            }
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getEntrada'})
    }    
}

export async function getEntradaPorId(req: Request, res: Response) {

    const identrada = req.params.id;
    let entradas: Entrada[]=[];
    let result: any;
    try {
        result = await db.querySelect('SELECT * FROM entradas WHERE identrada = ?', [identrada]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            entradas = result;
            res.status(200).json(entradas)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getEntradaPorId'})
    }
    
}

export async function createEntrada(req: Request, res: Response) {

    const entradas: Entrada = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO devoluciones SET ?', [entradas]);
        entradas.identrada = result.insertId;
        res.status(200).json({
            message: 'Se registro correctamente',
            id: entradas.identrada
        })
    } catch (error) {
        res.status(200).json({errror: error, message: 'Error en la funcion createEntrada'})
    }
}

export async function updateEntrada(req: Request, res: Response) {

    const identrada = req.params.id;
    const update: Entrada = req.body;
    let entradas: Entrada[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE entradas SET ? WHERE identrada = ?', [update, identrada]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'})
            }
            entradas = result
            res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateEntrada'})
    }    
}

export async function deleteEntrada(req: Request, res: Response) {

    const identrada = req.params.id;
    let entradas: Entrada[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM entradas SET ? WHERE identrada = ?', [identrada]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            entradas = result;
            res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteEntrada'})
    }
    
}