import { Request, Response } from 'express';
import db from '../../database/db'
import Usuario from '../models/usuarios.models'

export async function getUsuario(req: Request, res: Response): Promise< void > {

    let result: any;

    try {
        result = await db.querySelect('SELECT * FROM usuarios');
            if(!result) {
                res.status(200).json({message: 'Sin resultados'})
            }
            res.status(200).json(result)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion getUsuario'})
    }
}

export async function logear(req: Request, res: Response) {
    
    let user: string = req.body.user;
    let passw: string = req.body.passw;
    let usuario: Usuario;
    
    let result: any;
    let mensaje: {msj: string, status: string, usuario?: Usuario}
    try {
        result = await db.querySelect('SELECT * FROM usuarios WHERE user = ?', [user]);
            if(!result) {
                res.status(200).json({msj: 'No hay resultado'})
            }
            usuario = result[0];
    
            if (usuario.clave === passw){
                mensaje={msj: 'Usuario Correctamente Logeado', status: 'OK', usuario: usuario}
            }else{
                mensaje={msj: 'Clave Incorrecta', status: 'Error'}
            }
            res.status(200).json(mensaje)
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion logIn'})
    }
} 

export async function createUsuario(req: Request, res: Response) {

    const usuario: Usuario = req.body;
    let result: any;

    try {
        result = await db.querySelect('INSERT INTO usuarios SET ?', [usuario]);
        usuario.idusuario;
        res.status(200).json({
            message: 'Se registro correctamente',
            id: usuario.idusuario
        })
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion createUsuario'})
    }

}

export async function updateUsuario(req: Request, res: Response) {
    
    const idusuario = req.params.id;
    const update: Usuario = req.body;
    let usuario: Usuario[]=[];
    let result: any;

    try {
        result = await db.querySelect('UPDATE usuarios SET ? WHERE idusuario = ?', [update, idusuario]);
            if(!result) {
                res.status(200).json({message: 'No se pudo Actualizar'})
            }
            usuario = result;
            res.status(200).json({message: 'Se actualizo correctamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion updateUsuario'})
    }

}

export async function deleteUsuario(req: Request, res: Response) {

    const idusuario = req.params.id
    let usuario: Usuario[]=[];
    let result: any;

    try {
        result = await db.querySelect('DELETE FROM usuarios WHERE idusuario = ?', [idusuario]);
            if(!result) {
                res.status(200).json({message: 'No hay resultado'})
            }
            usuario = result;
            res.status(200).json({message: 'Se elimino exitosamente'})
    } catch (error) {
        res.status(400).json({error: error, message: 'Error en la funcion deleteUsuario'})
    }
}