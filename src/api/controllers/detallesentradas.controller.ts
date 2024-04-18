import  DetalleEntrada  from '../models/detallesentradas.models';
import db from '../../database/db';

export async function getDetalleEntrada(): Promise<DetalleEntrada[]> {

    const result = await db.querySelect('SELECT * FROM detallesentradas');
    return result[0] as DetalleEntrada[];
    
}

export async function getDetalleEntradaPorId(id: number): Promise<DetalleEntrada | null> {

    const result: any = await db.querySelect('SELECT * FROM detallesentradas WHERE iddetalleentrada = ?', [id]);
    return result[0][0] as DetalleEntrada | null;
    
}

export async function createDetalleEntrada(detalleentrada: DetalleEntrada): Promise<DetalleEntrada>{

    const result: any = await db.querySelect('INSERT INTO detallesentradas SET ?',[detalleentrada]);
    const insertedId = result[0].insertedId;
    detalleentrada.iddetalleentrada = insertedId;
    return detalleentrada;

}

export async function updateDetalleEntrada(detalleentrada: DetalleEntrada): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE detallesentradas SET ? WHERE idetalleentrada',[detalleentrada, detalleentrada.iddetalleentrada]);
    return result[0].affectedRows > 0;
    
}

export async function deleteDetalleEntrada(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM detalleentrada WHERE iddetalleentrada = ?', [id]);
    return result[0].affectedRows > 0;
    
}