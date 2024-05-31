import express from 'express'
import { createUsuario, deleteUsuario, getUsuario, logear, updateUsuario } from '../controllers/usuarios.controller';

const router = express.Router();

router.get('/all', getUsuario);
router.post('/logear', logear);
router.post('/insertar', createUsuario);
router.put('/update/:id', updateUsuario);
router.delete('/delete/:id', deleteUsuario);

export default router;