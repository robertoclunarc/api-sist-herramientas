import { getPedido, getPedidoPoId, createPedido, updatePedido, deletePedido } from "../controllers/pedidos.controller";
import express from 'express';

const router = express.Router();

router.get('/all', getPedido);
router.get('/getid/:id', getPedidoPoId);
router.post('/insertar', createPedido);
router.put('/update/:id', updatePedido);
router.delete('/delete/:id', deletePedido);

export default router;