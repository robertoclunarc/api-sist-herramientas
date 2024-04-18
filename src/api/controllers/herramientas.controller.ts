import Herramientas from "../models/herramientas.models";
import db from "../../database/db";

export async function getHerramienta(): Promise<Herramientas[]> {

    const result = await db.querySelect('SELECT * FROM herramientas');
    return result[0] as Herramientas[];
    
}

export async function getHerramientaPorId(id: number): Promise<Herramientas> {

    const result: any = await db.querySelect('SELECT * FROM herramientas SET ? WHERE idherramienta', [id]);
    return result[0][0] as Herramientas;
    
}

export async function createHerramienta(herramientas: Herramientas): Promise<Herramientas> {

    const result: any = await db.querySelect('INSERT INTO herramientas SET ?', [herramientas]);
    const insertedId = result[0].insertId;
    herramientas.idherramienta = insertedId;
    return herramientas;
    
}

export async function updateHerramienta(herramientas: Herramientas): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE herramientas SET ? WHERE idherramienta = ?', [herramientas, herramientas.idherramienta]);
    return result[0].affectedRows > 0;
    
}

export async function deleteHerramienta(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM herramientas SET ? ideherramienta = ?', [id]);
    return result[0].affectedRows > 0;
    
}
