import express from 'express';
import Rotas from './routes/routes.js';
import  limitReq from './middlewares/RateLimit.js';

const app = express();

app.use(express.json());
app.use(limitReq);

app.use(Rotas);

const porta = 3000;

app.listen(porta, () => {
  console.log(`rodando`);
});
