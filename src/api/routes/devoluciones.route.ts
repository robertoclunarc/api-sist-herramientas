import { getDevolucione, getDevolucionePorId, createDevolucione, updateDevolucione, deleteDevolucione } from "../controllers/devoluciones.controller";
import express from 'express';

const router = express.Router();

router.get('/devolcione', getDevolucione);
router.get('/devolucione/:id', getDevolucionePorId);
router.post('/devlucione', createDevolucione);
router.put('/devolucione/:id', updateDevolucione);
router.delete('/devolucione/:id', deleteDevolucione);

export default router;
