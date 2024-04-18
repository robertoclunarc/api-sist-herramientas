import Solicitante from "../models/solicitantes.models";
import db from "../../database/db";

export async function getSolicitante(): Promise<Solicitante[]> {

    const result = await db.querySelect('SELECT * FROM solicitantes');
    return result[0] as Solicitante[];
    
}

export async function getSolicitantePorId(id: number): Promise<Solicitante> {

    const result: any = await db.querySelect('SELECT * FROM solicitantes SET ? WHERE idsolicitante', [id]);
    return result[0][0] as Solicitante;
    
}

export async function createSolicitante(solicitantes: Solicitante): Promise<Solicitante> {

    const result: any = await db.querySelect('INSERT INTO solicitantes SET ?', [solicitantes]);
    const insertId = result[0].insertId;
    solicitantes.idsolicitante = insertId;
    return solicitantes;
    
}

export async function updateSolicitante(solicitantes: Solicitante): Promise<boolean> {

    const result: any = await db.querySelect('UPDATE solicitantes SET ? WHERE idsolicitante = ?', [solicitantes, solicitantes.idsolicitante]);
    return result[0].affectedRows > 0;
    
}

export async function deleteSolicitante(id: number): Promise<boolean> {

    const result: any = await db.querySelect('DELETE FROM solicitantes SET ? WHERE idsolicitante = ?', [id])
    return result[0].affectedRows > 0;
    
}