import DetallePedidos from "../models/detallespedidos.models";
import db from "../../database/db";

export async function getDetallePedido(): Promise< DetallePedidos[] > {

    const result = await db.querySelect('SELECT FROM detallespedidos')
    return result[0] as DetallePedidos[];

}

export async function getDetallePedidoPorId(id: number): Promise< DetallePedidos > {

    const result: any = await db.querySelect('SELECT FROM detallespedidos WHERE iddetallespedidos = ?', [id]);
    return result[0][0] as DetallePedidos;
    
}

export async function createDetallePedido(detallepedidos: DetallePedidos): Promise<DetallePedidos> {

    const result: any = await db.querySelect('INSERT INTO detallespedidos SET = ?', [detallepedidos]);
    const insertedId = result[0].insertId;
    detallepedidos.iddetpedido = insertedId;
    return detallepedidos;
    
}

export async function updateDetallePedido(detallepedidos: DetallePedidos): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE detallespedidos SET ? WHERE iddetallepedido', [detallepedidos, detallepedidos.iddetpedido]);
    return result[0].affectedRows > 0;
    
}

export async function deleteDetallePedido(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM detallespedidos WHERE iddetallepedido = ?', [id]);
    return result[0].affectedRows > 0;
    
}