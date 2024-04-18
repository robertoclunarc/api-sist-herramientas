import Entrada from "../models/entradas.models";
import db from "../../database/db";

export async function getEntrada(): Promise<Entrada[]> {

    const result = await db.querySelect('SELECT * FROM entradas');
    return result[0] as Entrada[];
    
}

export async function getEntradaPorId(id: number): Promise<Entrada> {

    const result: any = await db.querySelect('SELECT * FROM entradas WHERE identrada = ?', [id]);
    return result[0][0] as Entrada;
    
}

export async function createEntrada(entradas: Entrada): Promise<Entrada> {

    const result: any = await db.querySelect('INSERT INTO devoluciones SET ?', [entradas]);
    const insertedId = result[0].insertId;
    entradas.identrada = insertedId;
    return entradas;
}

export async function updateEntrada(entradas: Entrada): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE entradas SET ? WHERE identrada = ?', [entradas, entradas.identrada]);
    return result[0].affectedRows > 0;
    
}

export async function deleteEntrada(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM entradas SET ? WHERE identrada = ?', [id]);
    return result[0].affectedRows > 0
    
}