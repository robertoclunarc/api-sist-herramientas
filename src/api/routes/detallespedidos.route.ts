import { createDetallePedido, deleteDetallePedido, getDetallePedido, getDetallePedidoPorId, updateDetallePedido } from "api/controllers/detallespedidos.controller";
import  express  from "express";

const router = express.Router();

router.get('/detalle_pedido', getDetallePedido);
router.get('/detalle_pedido/:id', getDetallePedidoPorId);
router.post('/detalle_pedido', createDetallePedido);
router.put('/detalle_pedido/:id', updateDetallePedido);
router.delete('/detalle_pedido/:id', deleteDetallePedido);

export default router;