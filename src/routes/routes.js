import { Router } from 'express';
import { BuscarAgendamento, Criar } from '../Controllers/control.js';
import limitReq from '../middlewares/RateLimit.js';

const router = Router();

router.use(limitReq);

router.get('/appointments', BuscarAgendamento); 
router.post('/appointments', Criar);

export default router;


/*Uma duvida que muitos podem se perguntar é tipo Por que na parte de caminho eu não coloquei o caminho tipo ../exemplo/exemplo.js, então essa parte vai ser o endereço web da URl */