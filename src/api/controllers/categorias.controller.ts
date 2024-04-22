import { Request, Response } from 'express';
import Categoria from '../models/categorias.models';
import db from '../../database/db';

export async function getCategoria(req: Request, res: Response): Promise<void> {
    
    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM categorias');
        if(!result){ 
            res.status(200).json({message: 'Sin resultados'})       
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getCategoria'})       
    }

}

export async function getCategoriaPorId(req: Request, res: Response) {

    const idcategoria = req.params.id;
    let categoria: Categoria[]=[];
    let result: any;

    try {     
        result = await db.querySelect('SELECT * FROM categorias WHERE idcategoria = ?', [idcategoria]);
        if(!result){
            res.status(200).json({message: 'No hay resultado'})
        }
        categoria = result
        res.status(200).json(categoria)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getCategoriaPorId'})
    }
    
}
 
export async function createCategoria(req: Request, res: Response) {
    
    const categoria: Categoria = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO categorias SET ?', [categoria]);
        categoria.idcategoria = result.insertId;
        res.status(200).json({   
            messge: 'Se registro exitosamente',
            id: categoria.idcategoria
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createCategoria'})
    }
  
}

export async function updateCategoria(req: Request, res: Response) {
    
    const idcategoria = req.params.id;
    const update: Categoria = req.body;
    let categoria: Categoria[]=[];
    let result: any;

    try {
        result = await db.querySelect(' UPDATE categorias SET ? WHERE id = ?', [update, idcategoria]);
        if(!result){
            res.status(200).json({message: 'No se pudo acualizar'});
        }
        categoria = result
        res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateCategoria'})
    }

}

export async function deleteCategoria(req: Request, res: Response) {
    
    const idcategoria = req.params.id;
    let categoria: Categoria[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM categorias WHERE idcategoria = ?', [idcategoria]);
        if(!result){
            res.status(200).json({message: 'No hay resultado'})
        }
        categoria = result;
        res.status(200).json({message: 'Se elimino correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteCategoria'})
    }

}