import { authUser } from './../controllers/login.controller';

import { Router } from 'express';
const router = Router();

// router.use(checkJwt);

router.post('/login', authUser);

export default router;