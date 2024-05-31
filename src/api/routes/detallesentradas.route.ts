import { createDetalleEntrada, deleteDetalleEntrada, getDetalleEntrada, getDetalleEntradaPorId, updateDetalleEntrada } from '../controllers/detallesentradas.controller';
import express from 'express';

const router = express.Router();

router.get('/all', getDetalleEntrada);
router.get('/getid/:id', getDetalleEntradaPorId);
router.post('/insertar', createDetalleEntrada);
router.put('/update/:id', updateDetalleEntrada);
router.delete('/delete/:id', deleteDetalleEntrada);

export default router;
