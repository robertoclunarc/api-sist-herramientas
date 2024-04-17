
import Categoria from '../models/categorias.models';
import db from '../../database/db';

export async function getCategoria(): Promise<Categoria[]> {
  
        const result = await db.querySelect('SELECT * FROM categorias');
        return result[0] as Categoria[];

}

export async function getCategoriaPorId(id: number): Promise<Categoria> {
    
    const result: any = await db.querySelect('SELECT * FROM categorias WHERE idcategoria = ?', [id]);
    return result[0][0] as Categoria; 
    
}
 
export async function createCategoria(categoria: Categoria): Promise<Categoria> {
    
    const result: any = await db.querySelect('INSERT INTO categorias SET ?', [categoria]);
    const insertedId = result[0].insertId;
    categoria.idcategoria = insertedId;
    return categoria;
  
}

export async function updateCategoria(categoria: Categoria): Promise<boolean> {
    
    const result: any = await db.querySelect('UPDATE categorias SET ? WHERE idcategoria = ?', [categoria, categoria.idcategoria]);
    return result[0].affectedRows > 0; 

}

export async function deleteCategoria(id: number): Promise<boolean> {
    
    const result: any = await db.querySelect('DELETE FROM categorias WHERE idcategoria = ?', [id]);
    return result[0].affectedRows > 0;

}