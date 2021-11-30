import { insertRequest, selectRequests, updateRequest } from './../controllers/request-ticket.controller';
import { Router } from 'express';
const router = Router();

// router.use(checkJwt);

router.get('/request-ticket', selectRequests);
router.post('/request-ticket', insertRequest);
router.put('/request-ticket', updateRequest);

export default router;