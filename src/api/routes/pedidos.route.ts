import { getPedido, getPedidoPoId, createPedido, updatePedido, deletePedido } from "../controllers/pedidos.controller";
import express from 'express';

const router = express.Router();

router.get('/pedido', getPedido);
router.get('/pedido/:id', getPedidoPoId);
router.post('/pedido', createPedido);
router.put('/pedido/:id', updatePedido);
router.delete('/pedido/:id', deletePedido);

export default router;