import { Request, Response } from "express";
import DetallePedidos from "../models/detallespedidos.models";
import db from "../../database/db";

export async function getDetallePedido( req: Request, res: Response): Promise< void > {

    let result: any;

    try {
        result = await db.querySelect('SELECT FROM detallespedidos');
        if(!result) {
            res.status(200).json({message: 'Sin resultado'})
        }
        res.status(200).json(result)
    } catch (error) {
        res.status(200).json({error: error, message: 'Error en la funcion getDetallePedido'})
    }

}

export async function getDetallePedidoPorId(req: Request, res: Response) {

    const iddetallepedido = req.params.id;
    let detallespedidos: DetallePedidos[]=[];
    let result: any;

    try {    
        result = await db.querySelect('SELECT FROM detallespedidos WHERE iddetallespedidos = ?', [iddetallepedido]);
        if(!result) {
            res.status(200).json({message: 'No hay resultado'})
        }
        detallespedidos = result;
        res.status(200).json(detallespedidos)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getDetallePedidPorId'})
    }
    
}

export async function createDetallePedido(req: Request, res: Response) {

    const detallespedidos: DetallePedidos = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO detallespedidos SET = ?', [detallespedidos]);
        detallespedidos.idpedido = result.insertId
        res.status(200).json({
            message: 'Se registro exitosamente',
            id: detallespedidos.idpedido
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createDetallePedido'})
    }
    
}

export async function updateDetallePedido(req: Request, res: Response) {

    const iddetallepedido = req.params.id;
    const update: DetallePedidos = req.body;
    let detallespedidos: DetallePedidos[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE detallesentradas SET ? WHERE idetalleentrada',[update, iddetallepedido]);
        if(!result) {
            res.status(200).json({message: 'No se pudo actualizar'});
        }
        detallespedidos = result;
        res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateDeatllePedido'})
    }
    
}

export async function deleteDetallePedido(req: Request, res: Response) {

    const iddetallepedido = req.params.id;
    let detallespedidos: DetallePedidos[]=[];
    let result: any

    try {
        result = await db.querySelect('DELETE FROM detallespedidos WHERE iddetallepedido = ?', [iddetallepedido]);
        if(!result) {
            res.status(200).json({message: 'No hay resultado'})
        }
        detallespedidos = result;
        res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        
    }    
}