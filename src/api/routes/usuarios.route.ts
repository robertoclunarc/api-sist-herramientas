import express from 'express'
import { createUsuario, deleteUsuario, getUsuario, logear, updateUsuario } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/login', getUsuario);
router.post('/logear', logear);
router.post('/login', createUsuario);
router.put('/login', updateUsuario);
router.delete('/login', deleteUsuario);

export default router;