import { getEntrada, getEntradaPorId, createEntrada, updateEntrada, deleteEntrada } from "../controllers/entradas.controller";
import express from 'express';

const router = express.Router();

router.get('/entrada', getEntrada);
router.get('/entrada/:id', getEntradaPorId);
router.post('.entrada', createEntrada);
router.put('/entrada/:id', updateEntrada);
router.delete('/entrada/:id', deleteEntrada);

export default router;