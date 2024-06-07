## Rutas
# Get: 

- get "sistherramientas/detalleentrada/all"
- get "sistherramientas/detallepedido/all"
- get "sistherramientas/devoluciones/all"
- get "sistherramientas/entrada/all"
- get "sistherramientas/herramienta/all"
- get "sistherramientas/pedido/all"
- get "sistherramientas/solicitante/all"

# Get ID:

- get "sistherramientas/detalleentrada/getid/:Id"
- get "sistherramientas/detallepedido/getid/:Id"
- get "sistherramientas/devoluciones/getid/:Id"
- get "sistherramientas/entrada/getid/:Id"
- get "sistherramientas/herramienta/getid/:Id"
- get "sistherramientas/pedido/getid/:Id"
- get "sistherramientas/solicitante/getid/:Id"

# Post:

- post "sistherramientas/detalleentrada/insertar" ejemplo {
    ``` "iddetalleentrada":1, "iddentrada":1, "codigoentradaant":sss, "codigoherramienta":sss, "idherramienta":1, "descripcion":sss, "estatus":sss, "cantidad":1, "preciopedido":1 ``` }

- post "sistherramientas/detallepedido/insertar" ejemplo {
    ``` "iddetpedido":1, "idpedido":1, "idpedidoant":sss, "idherramienta":1, "codigoherramienta":sss, "cantidad":1, "cantidaddevuelta":1, "estado":sss, "preciopedido":1, "totalpedido":1, "estatus":sss, "fechadevolucion":sss ``` }

- post "sistherramientas/devoluciones/insertar" ejemplo {
    ``` "iddevolucion":1, "cod_dev_ant":sss, "idpedido_ant":sss, "idpedido":1, "codigoherramienta_ant":sss, "idherramienta":1, "fecha":sss, "cantidad":1, "observaciones":1, "estatus":1, ``` }

- post "sistherramientas/entrada/insertar" ejemplo {
    ``` "identrada":1, "codigoentradaant":sss, "fechaentrada":sss, "codigoherramienta":sss, "descripcion":sss, "cantidad":1, "notaentrega":sss, "ordencompra":sss, "observacion":sss, "estatus":sss, "totalstock":1, "ingresado":sss, "provedor":sss, "preciopedido":1, "precioestandar":1, "hora":sss ``` }

- post "sistherramientas/herramienta/insertar" ejemplo {
    ``` "idherramienta":1, "codigoant":sss, "descripcion":sss, "fecha":sss, "stock":1, "marca":sss, "nombre":sss, "observaciones":sss, "ubicacion":1, "observacioni":sss, "cantidadminima":1, "estatus":sss, "fcm":1, "umb":1, "numeroparte":sss, "preciopedido":1 "sm":sss, "cap":sss "precioestandar":1 ``` }

- post "sistherramientas/pedido/insertar" ejemplo {
    ``` "idpedido":1, "idpedidoant":sss, "idsolicitante":1, "idpersonalant":sss, "fecha":sss, "destino":sss, "despachado":sss, "departamento":sss, "observacion":sss, "preciopedido":1, "hora":sss, ``` }

- post "sistherramientas/solicitante" ejemplo {
    ``` "idsolicitante":1, "idpersonalant":sss, "nombre":sss, "area":sss, "departamento":sss, ``` }

## Put:

- put "sistherramientas/detalleentrada/update/:id"
- put "sistherramientas/detallespedido/update/:id"
- put "sistherramientas/devoluciones/update/:id"
- put "sistherramientas/entrada/update/:id"
- put "sistherramientas/herramienta/update/:id"
- put "sistherramientas/pedido/update/:id"
- put "sistherramientas/solicitante/:id"

## Delete:

- delete "sistherramientas/detalleentrada/delete/:id"
- delete "sistherramientas/detallepedido/delete/:id"
- delete "sistherramientas/devoluciones/delete/:id"
- delete "sistherramientas/entrada/delete/:id"
- delete "sistherramientas/herramienta/delete/:id"
- delete "sistherramientas/pedido/delete/:id"
- delete "sistherramientas/solicitante/delete/:id"