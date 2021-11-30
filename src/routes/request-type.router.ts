import { Router } from 'express';
import { getRequestTypes } from '../controllers/request-type.controller'
const router = Router();

// router.use(checkJwt);

router.get('/request-types/:areaid', getRequestTypes);

export default router;