import { getDevolucione, getDevolucionePorId, createDevolucione, updateDevolucione, deleteDevolucione } from "../controllers/devoluciones.controller";
import express from 'express';

const router = express.Router();

router.get('/all', getDevolucione);
router.get('/getid/:id', getDevolucionePorId);
router.post('/insertr', createDevolucione);
router.put('/update/:id', updateDevolucione);
router.delete('/delete/:id', deleteDevolucione);

export default router;
