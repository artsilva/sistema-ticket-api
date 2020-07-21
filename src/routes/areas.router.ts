import { quantityAreasByRequest } from './../controllers/areas.controller';
import { Router } from 'express';
import { getAreas } from '../controllers/areas.controller'
const router = Router();

// router.use(checkJwt);

router.get('/areas', getAreas);
router.get('/quantity-areas', quantityAreasByRequest)

export default router;