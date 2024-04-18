import { createDetalleEntrada, deleteDetalleEntrada, getDetalleEntrada, getDetalleEntradaPorId, updateDetalleEntrada } from 'api/controllers/detallesentradas.controller';
import express from 'express';

const router = express.Router();

router.get('/detalle_entrada', getDetalleEntrada);
router.get('/detalle_entrada/:id', getDetalleEntradaPorId);
router.post('/detalle_entrada', createDetalleEntrada);
router.put('/detalle_entrada/:id', updateDetalleEntrada);
router.delete('/detalle_entrada/:id', deleteDetalleEntrada);

export default router;
