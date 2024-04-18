import express from 'express'
import { createUsuario, deleteUsuario, getUsuario, getUsuarioPorId, updateUsuario } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/usuarios', getUsuario);
router.get('/usuarios/:id', getUsuarioPorId);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);

export default router;