import express from 'express';
import { getVacancies } from '../controllers/mainController.js';

const router = express.Router();



router.get('/', getVacancies);
// router.post('/user', createCV);
// router.delete('/user/:id', deleteCV);

export default router;