import { Request, Response } from 'express';
import  DetalleEntrada  from '../models/detallesentradas.models';
import db from '../../database/db';

export async function getDetalleEntrada(req: Request, res: Response): Promise<void> {

    let result: any;

    try {    
        result = await db.querySelect('SELECT * FROM detallesentradas');
            if(!result){
            res.status(200).json({message: 'Sin resultado'})
            }
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getDetalleEntrada'})
    }    

}

export async function getDetalleEntradaPorId(req: Request, res: Response) {

    const iddetalleentrada = req.params.id;
    let detalleentrada: DetalleEntrada[]=[];
    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM detallesentradas WHERE iddetalleentrada = ?', [iddetalleentrada]);
            if(!result){
                res.status(200).json({message: 'No hay resultado'})
            }
            detalleentrada = result;
            res.status(200).json(detalleentrada);
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getDetalleentradaPorId'})
    }

    
}

export async function createDetalleEntrada(req: Request, res: Response) {

    const detalleentrada: DetalleEntrada = req.body;
    let result: any
    try {
        result = await db.querySelect('INSERT INTO detallesentradas SET ?',[detalleentrada]);
        detalleentrada.iddetalleentrada = result.insertId;
        res.status(200).json({
            message: 'Creado exitosamente',
            id: detalleentrada.iddetalleentrada
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createDetalleEntrada'})
    }

}

export async function updateDetalleEntrada(req: Request, res: Response) {

    const iddetalleentrada = req.params.id;
    const update: DetalleEntrada = req.body;
    let detalleentrada: DetalleEntrada[]=[]
    let result: any;

    try {
        result = await db.querySelect('UPDATE detallesentradas SET ? WHERE idetalleentrada',[update, iddetalleentrada]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'})
            }
            detalleentrada = result
            res.status(200).json({message: 'Se actulizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateDetalleEntrada'})
    }
}

export async function deleteDetalleEntrada(req: Request, res: Response) {

    const idetalleentrada = req.params.id;
    let detalleentrada: DetalleEntrada[]=[];
    let result: any;
    
    try {
        result = await db.querySelect('DELETE FROM detalleentrada WHERE iddetalleentrada = ?', [idetalleentrada]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'});
            }
        res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteDetalleEntrada'})
    }
}