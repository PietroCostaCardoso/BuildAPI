import rateLimit from 'express-rate-limit';


const limitReq = rateLimit({
  windowMs: 1000, // janela de tempo em milissegundos (1000ms = 1 segundo)
  max: 7, //número máximo de req permitidas dentro dessa janela

  //  se o usuário estourar o limite
  message: {
    status: 429,
    erro: 'Você enviou muitas requisições. espere um pouco'
  },
  // Retorna no cabeçalho da resposta o quanto falta para o limite estourar
  standardHeaders: true, 
  legacyHeaders: false
});

export default limitReq;
