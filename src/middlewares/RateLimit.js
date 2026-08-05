import rateLimit from 'express-rate-limit';


const limitReq = rateLimit({
  // windowMs define o tamanho da janela de tempo em milissegundos (1000ms = 1 segundo)
  windowMs: 1000, 
  // max é o número máximo de req permitidas dentro dessa janela 
  max: 7, 

  // Mensagem que será enviada se o usuário estourar o limite
  message: {
    status: 429,
    erro: 'Você enviou muitas requisições. espere um pouco'
  },
  // Retorna no cabeçalho da resposta o quanto falta para o limite estourar
  standardHeaders: true, 
  legacyHeaders: false
});

export default limitReq;