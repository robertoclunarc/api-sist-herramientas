// routes.ts
import express from 'express';
import { getCategoria, getCategoriaPorId, createCategoria, updateCategoria, deleteCategoria } from '../controllers/categorias.controller';

const router = express.Router();

router.get('/categorias', getCategoria);
router.get('/categorias/:id', getCategoriaPorId);
router.post('/categorias', createCategoria);
router.put('/categorias/:id', updateCategoria);
router.delete('/categorias/:id', deleteCategoria);

export default router;

