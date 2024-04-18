import { getSolicitante, getSolicitantePorId, createSolicitante, updateSolicitante, deleteSolicitante } from "..//controllers/solicitante.controller";
import express from 'express';

const router = express.Router();

router.get('/solicitante', getSolicitante);
router.get('/solicitante/:id', getSolicitantePorId);
router.post('/solicitante', createSolicitante);
router.put('/solicitante/:id', updateSolicitante);
router.delete('/solicitante/:id', deleteSolicitante);

export default router;
