interface DetalleEntrada {

    iddetalleentrada?: number;
    identrada?: number;
    codigoentradaant?: string;
    codigoherramienta?: string;
    idherramienta?: number;
    descripcion?: string;
    estatus?: string;
    cantidad?: number;
    preciopedido?: number;
    usuarioreg?: string;
    fechareg?: Date;
    usuariomod?: string;
    fechamod?: Date
}

export default  DetalleEntrada;
