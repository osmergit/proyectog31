import express from 'express';
import { regusuario, showuser, shuserone, deluser, upuser  } from '../controllers/userscontroller.js';
import { regevento, shevento, shonevent, delevento, upevento } from '../controllers/eventcontrollers.js';
import {db} from '../mongodb.js';

export const router = express.Router();

//rutas collection usuarios

router.post('/reguser', regusuario);
router.get('/shuser', showuser);
router.get('/shuser/:id', shuserone);
router.delete('/deluser/:id',deluser);
router.put('/upuser/:id', upuser);

//rutas para los eventos deportivos

router.post('/regevento', regevento);
router.get('/shevento', shevento);
router.get('/shevento/:id', shonevent);
router.delete('/delevento/:id', delevento);
router.put('/upevento/:id', upevento);

export default router;