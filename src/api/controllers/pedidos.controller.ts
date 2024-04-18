import Pedido from "../models/pedidos.models";
import db from "../../database/db";

export async function getPedido(): Promise<Pedido[]> {

    const result = await db.querySelect('SELECT * FROM pedidos');
    return result[0] as Pedido[];

}

export async function getPedidoPoId(id: number): Promise<Pedido> {

    const result: any = await db.querySelect('SELECT * FROM pedidos SET ? WHERE idpedido', [id]);
    return result[0][0] as Pedido;
    
}

export async function createPedido(pedidos: Pedido): Promise<Pedido> {

    const result: any = await db.querySelect('INSERT INTO pedidos SET ?', [pedidos]);
    const insertedId = result[0].insertId;
    pedidos.idpedido = insertedId;
    return pedidos;
    
}

export async function updatePedido(pedidos: Pedido): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE INTO pedidos SET ? WHERE idpedido = ?', [pedidos, pedidos.idpedido]);
    return result[0].affectedRows > 0;
    
}

export async function deletePedido(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM pedidos SET ? WHERE idpedido = ?', [id]);
    return result[0].affectedRows > 0;
    
}