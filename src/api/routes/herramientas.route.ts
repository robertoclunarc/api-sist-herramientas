import { getHerramienta, getHerramientaPorId, createHerramienta, updateHerramienta, deleteHerramienta } from "../controllers/herramientas.controller";
import express from 'express';

const router = express.Router();

router.get('/herramienta', getHerramienta);
router.get('/herramienta/:id', getHerramientaPorId);
router.post('/herramienta', createHerramienta);
router.put('/herramienta/:id', updateHerramienta);
router.delete('/herramienta/:id', deleteHerramienta);

export default router;
