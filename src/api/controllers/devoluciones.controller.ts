import Devolucione from "../models/devoluciones.models";
import db from "../../database/db";

export async function getDevolucione(): Promise<Devolucione[]> {

    const result = await db.querySelect('SELECT * FROM devoluciones');
    return result[0] as Devolucione[];
    
}

export async function getDevolucionePorId(id: number): Promise<Devolucione> {

    const result: any = await db.querySelect('SELECT * FROM devoluciones WHERE iddevolucione = ?', [id]);
    return result[0][0] as Devolucione;
    
}

export async function createDevolucione(devoluciones: Devolucione): Promise<Devolucione> {

    const result: any = await db.querySelect('INSERT INTO devoluciones SET ?', [devoluciones]);
    const insertedId = result[0].insertId;
    devoluciones.iddevolucion = insertedId;
    return devoluciones;
    
}

export async function updateDevolucione(devoluciones: Devolucione): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE devoluciones SET ? WHERE iddevolucione = ?', [devoluciones, devoluciones.iddevolucion]);
    return result[0].affectedRows > 0;
    
}

export async function deleteDevolucione(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM devoluciones SET ? WHERE iddevolucione = ?', [id]);
    return result [0].affectedRows > 0;
    
}