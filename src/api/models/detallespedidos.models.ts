interface DetallePedidos {

    iddetpedido?: number;
    idpedido?: number;
    idpedidoant?: string;
    idherramienta?: number;
    codigoherramienta?: string;
    cantidad?: number;
    cantidaddevuelta?: number;
    estado?: string;
    preciopedido?: number;
    totalpedido?: number;
    estatus?: string;
    fechadevolucion: Date;
    usuarioreg?: string;
    fechareg?: Date;
    usuariomod?: string;
    fechamod?: Date
}

export default DetallePedidos;
