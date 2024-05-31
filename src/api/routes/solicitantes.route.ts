import { getSolicitante, getSolicitantePorId, createSolicitante, updateSolicitante, deleteSolicitante } from "..//controllers/solicitante.controller";
import express from 'express';

const router = express.Router();

router.get('/all', getSolicitante);
router.get('/getid/:id', getSolicitantePorId);
router.post('/insertar', createSolicitante);
router.put('/update/:id', updateSolicitante);
router.delete('/delete/:id', deleteSolicitante);

export default router;
