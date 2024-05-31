import { createDetallePedido, deleteDetallePedido, getDetallePedido, getDetallePedidoPorId, updateDetallePedido } from "../controllers/detallespedidos.controller";
import  express  from "express";

const router = express.Router();

router.get('/all', getDetallePedido);
router.get('/getid/:id', getDetallePedidoPorId);
router.post('/insertar', createDetallePedido);
router.put('/update/:id', updateDetallePedido);
router.delete('/delete/:id', deleteDetallePedido);

export default router;