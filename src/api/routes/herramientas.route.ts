import { getHerramienta, getHerramientaPorId, createHerramienta, updateHerramienta, deleteHerramienta } from "../controllers/herramientas.controller";
import express from 'express';

const router = express.Router();

router.get('/all', getHerramienta);
router.get('/getid/:id', getHerramientaPorId);
router.post('/insertar', createHerramienta);
router.put('/update/:id', updateHerramienta);
router.delete('/delete/:id', deleteHerramienta);

console.log(getHerramienta)

export default router;
