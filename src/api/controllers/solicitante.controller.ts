import { Request, Response } from "express";
import Solicitante from "../models/solicitantes.models";
import db from "../../database/db";

export async function getSolicitante(req: Request, res: Response): Promise< void > {

    let result: any

    try {
        result = await db.querySelect('SELECT * FROM solicitantes');
            if(!result) {
                res.status(200).json({message: 'Sin resultados'})
            }
            
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getSolicitante'})
    }
    
}

export async function getSolicitantePorId(req: Request, res: Response) {

    const idsolicitante = req.params.id;
    let solicitantes: Solicitante[]=[];
    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM solicitantes SET ? WHERE idsolicitante', [idsolicitante]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            solicitantes = result
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getSolicitantePorId'})
    }
    
}

export async function createSolicitante(req: Request, res: Response) {

    const solicitantes: Solicitante = req.body
    let result: any;
    
    try {
        result = await db.querySelect('INSERT INTO solicitantes SET ?', [solicitantes]);
        solicitantes.idsolicitante = result.insertId;
        res.status(200).json({
            message: 'Se registro exitosamente',
            id: solicitantes.idsolicitante
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createSolicitante'})
    }
}

export async function updateSolicitante(req: Request, res: Response) {

    const idsolicitante = req.params.id;
    const update: Solicitante = req.body;
    let solicitantes: Solicitante[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE solicitantes SET ? WHERE idsolicitante = ?', [update, idsolicitante]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'})
            }
            solicitantes = result;
            res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateSolicitante'})
    }

}

export async function deleteSolicitante(req: Request, res: Response) {

    const idsolicitante = req.params.id;
    let solicitantes: Solicitante[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM solicitantes SET ? WHERE idsolicitante = ?', [idsolicitante])
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            solicitantes = result
            res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteSolicitante'})
    }
}