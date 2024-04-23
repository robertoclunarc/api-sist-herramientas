import { Request, Response } from "express";
import Pedido from "../models/pedidos.models";
import db from "../../database/db";

export async function getPedido(req: Request, res: Response): Promise< void > {

    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM pedidos');
            if(!result) {
                res.status(200).json({message: 'Sin resultado'})
            }
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getPedido'})
    }

}

export async function getPedidoPoId(req: Request, res: Response) {

    const idpedido = req.params.id;
    let pedidos: Pedido[]=[];
    let result: any

    try {
        result = await db.querySelect('SELECT * FROM pedidos SET ? WHERE idpedido', [idpedido]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})                
            }
            pedidos = result
            res.status(200).json(pedidos)        
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getPedidosPorId'})
    }
    
}

export async function createPedido(req: Request, res: Response) {

    const pedidos: Pedido = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO pedidos SET ?', [pedidos]);
        pedidos.idpedido = result.insertId;
            res.status(200).json({
                message: 'Se registro exitosamente',
                id: pedidos.idpedido
            })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createPedido'})
    }
    
}

export async function updatePedido(req: Request, res: Response) {

    const idpedido = req.params.id;
    const update: Pedido = req.body;
    let pedidos: Pedido[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE INTO pedidos SET ? WHERE idpedido = ?', [update, idpedido]);
            if(!result) {
                res.status(200).json({message: 'No se pudo actualizar'})
            }
            pedidos = result;
            res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
            res.status(400).json({error: error, message: 'Error en la funcion updatePedido'})
    }
}

export async function deletePedido(req: Request, res: Response) {

    const idpedido = req.params.id;
    let pedidos: Pedido[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM pedidos SET ? WHERE idpedido = ?', [idpedido]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            pedidos = result
            res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deletePedido'})
    }
}