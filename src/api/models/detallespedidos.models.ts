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
    fechadevolucion: string;
    usuarioreg?: string;
    fechareg?: string;
    usuariomod?: string;
    fechamod?: string
}

export default DetallePedidos;
