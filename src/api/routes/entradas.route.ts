import { getEntrada, getEntradaPorId, createEntrada, updateEntrada, deleteEntrada } from "../controllers/entradas.controller";
import express from 'express';

const router = express.Router();

router.get('/all', getEntrada);
router.get('/getid/:id', getEntradaPorId);
router.post('/insertar', createEntrada);
router.put('/update/:id', updateEntrada);
router.delete('/delete/:id', deleteEntrada);

export default router;