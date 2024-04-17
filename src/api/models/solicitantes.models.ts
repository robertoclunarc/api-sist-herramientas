interface Solicitante {

    idsolicitante?: number;
    idpersonalant?: string;
    nombre?: string;
    area?: string;
    departamento?: string;
    usuarioreg?: string;
    fechareg?: Date;
    usuariomod?: string;
    fechamod?: Date
}

export default Solicitante;