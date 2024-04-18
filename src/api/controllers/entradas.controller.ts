import Devolucione from "api/models/devoluciones.models";
import Entrada from "api/models/entradas.models";
import db from "database/db";

export async function getEntrada(): Promise<Entrada> {

    const result = await db.querySelect('SELECT * FROM entradas');
    return result[0] as Entrada;
    
}

export async function getEntradaPorId(id: number): Promise<Entrada | null> {

    const result = await db.querySelect('SELECT * FROM entradas WHERE identrada = ?', [id]);
    return result[0][0] as Entrada | null;
    
}

export async function createEntrada(entradas: Entrada): Promise<Entrada> {

    const result = await db.querySelect('INSERT INTO devoluciones SET ?', [entradas]);
    const insertedId = result[0].identrada;
    entradas.identrada = insertedId;
    return entradas;
}

export async function updateEntrada(entradas: Entrada): Promise<boolean> {

    const result = await db.querySelect('UPDATE entradas SET ? WHERE identrada = ?', [entradas, entradas.identrada]);
    return result[0].affectedRows > 0;
    
}

export async function deleteEntrada(id: number): Promise<boolean> {

    const result = await db.querySelect('DELETE FROM entradas SET ? WHERE identrada = ?', [id]);
    return result[0].affectedRows > 0
    
}