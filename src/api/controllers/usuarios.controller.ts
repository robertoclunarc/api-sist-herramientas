import db from 'database/db'
import Usuario from 'api/models/usuarios.models'


export async function getUsuario(): Promise<Usuario[]> {

    const result = await db.querySelect('SELECT * FROM usuarios');
    return result[0] as Usuario[]

}

export async function getUsuarioPorId(id: number): Promise <Usuario | null> {
    
    const result = await db.querySelect('SELECT * FROM usuarios WHERE idusuario = ?', [id]);
    return result[0][0] as Usuario | null;

}

export async function createUsuario(usuario: Usuario): Promise<Usuario> {

    const result = await db.querySelect('INSERT INTO usuarios SET ?', [usuario]);
    const insertedId = result[0].insertId;
    usuario.idusuario = insertedId;
    return usuario;

}

export async function updateUsuario(usuario: Usuario): Promise<boolean> {
    
    const result = await db.querySelect('UPDATE usuarios SET ? WHERE idusuario = ?', [usuario, usuario.idusuario]);
    return result[0].affectedRows > 0;

}

export async function deleteUsuario(id: number): Promise<boolean> {

    const result = await db.querySelect('DELETE FROM usuarios WHERE idusuario = ?', [id]);
    return result[0].affectedRows > 0;
    
}