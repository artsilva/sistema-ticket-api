import { getStatus } from './../controllers/status.controller';
import { Router } from 'express';

const router = Router();

// router.use(checkJwt);

router.get('/status', getStatus);

export default router;