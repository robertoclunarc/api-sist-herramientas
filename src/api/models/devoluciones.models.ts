interface Devolucione {

    iddevolucion?: number;
    cod_dev_ant?: string;
    idpedido_ant?: string;
    idpedido?: number;
    codigoherramienta_ant?: string;
    idherramienta?: number;
    fecha?: Date;
    cantidad?: number;
    observaciones?: number;
    estatus?: number;
    usuarioreg?: string;
    fechareg?: Date;
    usuariomod?: string;
    fechamod?: Date
}

export default Devolucione;