import { Router } from 'express';
import { getUsers, getUserById, setUser, updateUser, deleteUser } from '../controllers/example.controller'
const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', setUser);
router.put('/users', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
