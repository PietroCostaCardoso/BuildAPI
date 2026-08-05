# Guia Completo de instruções sobre API

Este documento apresenta uma explicação detalhada, prática e estruturada sobre os conceitos de **REST** e **RESTful**, seus pilares, métodos HTTP, bibliotecas utilizadas e mostar algumas dificuldades que inicantes podem ter no inicio.

---
## O que é REST e RESTful?

**REST** (*Representational State Transfer* / Transferência de Estado Representacional): É um **estilo arquitetural** — um conjunto de regras, boas práticas e diretrizes para a criação de APIs (*Application Programming Interfaces*). Ele aproveita a infraestrutura nativa da web baseada no protocolo **HTTP**.
**RESTful**: Atribuído a um sistema ou API que **implementa e segue à risca** as regras definidas pela arquitetura REST.

---

## Diferença Principal

| Conceito | Definição | Analogia |
| :--- | :--- | :--- |
| **REST** | O conceito, a teoria e a receita. | O Código de Trânsito |
| **RESTful** | A implementação prática que segue a teoria. | O motorista que cumpre o código |

---

## Os Pilares da Arquitetura REST

### Recursos e URIs
No modelo REST, qualquer entidade de informação é tratada como um **recurso** (ex.: utilizadores, produtos, pedidos). Cada recurso possui um endereço único chamado (URL).

**Não-RESTful:** `https://api.exemplo.com/get_user_by_id?id=123`
**RESTful:** `https://api.exemplo.com/utilizadores/123`

**Regra:** A URL identifica **o recurso**, enquanto o método HTTP define **a ação**.

---

### Métodos HTTP (Verbos)
A operação realizada no recurso é guiada pelo verbo HTTP utilizado na requisição, correspondendo ao padrão **CRUD** (*Create, Read, Update, Delete*):

| Operação CRUD | Verbo HTTP | Descrição no REST | Exemplo de Rota |
| :--- | :--- | :--- | :--- |
| **Create** | `POST` | Cria um novo recurso | `POST /pedidos` |
| **Read** | `GET` | Recupera/lê dados de um recurso | `GET /pedidos/45` |
| **Update** | `PUT` / `PATCH` | `PUT`: Atualiza todo o recurso<br>`PATCH`: Atualiza parcialmente | `PATCH /pedidos/45` |
| **Delete** | `DELETE` | Remove um recurso existente | `DELETE /pedidos/45` |

## logica:
   O cliente envia o JSON -> O seu arquivo .js recebe -> O seu .js decide o que fazer (salvar no banco de dados, responder ao cliente, etc.). 

## dependencias:
   **express** - Framework web principal do Node.js. Responsável por criar o servidor, gerenciar rotas HTTP e manipular os dados JSON de entrada e saída.
   **mysql2** - conexão com o MySQL. Permite executar comandos SQL puros ( SELECT , INSERT      UPDATE , DELETE ) diretamente a partir dos arquivos JS.
   **dotenv** - Gerenciador de variáveis de ambiente. Carrega as credenciais do arquivo .env para o process.env , protegendo dados sensíveis (como senhas do banco).
   **CORS** - Middleware de segurança que habilita a política CORS. Permite que aplicações externas (frontend/mobile) façam requisições para a API sem bloqueios do navegador.
   **nodemon** - Utilitário de desenvolvimento. Monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor a cada alteração salva.
   **express-rate-limit** - controla as req ( é como um segurança que controla o pessoas que entrar pelo portão)

## Rate limit
   Rate limit é aquele que controla as requisições então imagina que muitas pessoas tentam passar por um portão, obviamente vai dar confusão e a entrada trava. Ele funciona como um segurança que vai controlar.
   
## Dificuldades que iniciantes podem ter em entender a estrutura e o funcionamento de uma API

Entender como os arquivos se relacionam e como testar uma API no início do aprendizado de desenvolvimento back-end é uma das maiores dúvidas de quem está começando. Abaixo estão os principais pontos explicados de forma simples e prática.

---

#### Onde fica a "API" na estrutura do projeto?

A API **não é um arquivo único**, mas sim o conjunto de todos os arquivos trabalhando juntos dentro da pasta `src/`. Cada pasta possui um papel específico no fluxo de comunicação:

* **`routes/` (Portas de Entrada):** Mapeiam as URLs/endereços acessíveis (endpoints) e indicam qual controller deve processar a requisição.
* **`controllers/` (Regras de Entrada e Saída):** Recebem as requisições, chamam o model correto e preparam a resposta (geralmente em formato JSON).
* **`models/` (Comunicação com Banco de Dados):** Definem a estrutura das tabelas/coleções e executam consultas ou operações no banco de dados.
* **`db/`:** Guarda arquivos de configuração globais (como credenciais de banco de dados e variáveis de ambiente).
* **`main.js`:** O ponto de entrada da aplicação, onde o servidor é inicializado e as rotas são registradas.

---

#### Projetos grandes precisam de mais pastas?

**Sim.** Conforme o sistema cresce, criam-se novas pastas para evitar que controllers e models fiquem sobrecarregados:

* **`services/`:** Isolam a lógica de negócio complexa (ex: envio de e-mails, cálculo de descontos, validações extensas).
* **`middlewares/`:** Funcionam como filtros de segurança ou validação antes que a requisição chegue ao controller (ex: checar se o usuário está autenticado via token JWT).
* **`utils/` / `helpers/`:** Guardam funções genéricas e reutilizáveis (ex: formatadores de data, geradores de código).

---

#### Como saber se a API está funcionando?

O **Terminal** apenas indica se o servidor subiu sem erros sintáticos e exibe mensagens de `console.log()`. Ele **não** é suficiente para testar todas as funcionalidades.

Para testar o funcionamento real da API:
* **Navegador:** Serve apenas para requisições do tipo `GET` (como listar dados).
* **Clientes de API (Postman, Insomnia, Thunder Client no VS Code):** São as ferramentas corretas para testar requisições `POST`, `PUT`, `DELETE`, enviar dados JSON no corpo da requisição e verificar os códigos de status de resposta (ex: `200 OK`, `201 Created`, `404 Not Found`).

---

#### Por onde começar a codificar?

Após conectar o banco de dados, o desenvolvimento deve seguir o fluxo de **uma funcionalidade por vez** (ex: "Cadastrar Usuário"):

1. **Model:** Defina a estrutura do dado no banco (ex: `Model.js`).
2. **Controller:** Crie a função que vai receber os dados da requisição e chamar o Model (ex: `control.js`).
3. **Route:** Mapeie o método e a URL apontando para a função do Controller (ex: `routes.js`).
4. **`main.js` e Teste:** Registre as rotas no arquivo principal e faça a requisição no Postman/Insomnia/Thunder Client para validar o fluxo.

#### Backend é sempre uma API?
**Dificuldade/Dúvida:** *"Se eu for construir um site inteiro (da interface à lógica), a maioria das pastas do backend vai ser voltada para a API?"*

Na arquitetura moderna mais comum, sim! O Backend e o Frontend são projetos 100% separados.
  **Backend (API):** Cuida exclusivamente da lógica, banco de dados, regras de negócio e rotas, retornando apenas dados puros (geralmente em formato JSON).
  **Frontend:** Aplicação em React, Vue, Flutter, etc., que consome a API e desenha a interface para o usuário.
**Exceção (Monólitos):** Em abordagens tradicionais com renderização no servidor (*Server-Side Rendering* como Laravel, Django ou EJS), o backend gera e entrega a página HTML pronta, sem necessariamente expor uma API REST RESTful separada.

---

#### Por que a API de terceiros parece ser "apenas um link"?
**Dificuldade/Dúvida:** *"Quando dizem que vou pegar uma API externa para o meu projeto, geralmente me dão apenas um link?"*

 Esse "link" é o **Endpoint** (URL Base). Trata-se da porta de entrada pública do servidor de outra empresa (ex: Google, OpenAI).
**Como funciona:** Para proteger o código-fonte e o banco de dados interno, as empresas disponibilizam rotas públicas associadas a verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`). Seu código faz chamadas para essas URLs para enviar ou receber dados de forma segura.

---

#### "Construir uma API" é a mesma coisa que "Construir o Backend"?
**Dificuldade/Dúvida:** *"Quando falo que vou construir uma API, estou construindo um sistema backend inteiro com rotas, banco de dados, models e controllers?"*

 No mercado atual, as expressões *"construir o backend"* e *"construir a API"* são usadas praticamente como sinônimos.
**A estrutura engloba:**
  **Banco de Dados (DB):** Armazenamento das informações.
  **Models:** Estrutura, validação e mapeamento dos dados.
  **Controllers / Lógica de Negócio:** Execução das regras da aplicação (autenticação, cálculos, validações).
  **Rotas:** Os caminhos por onde o frontend/cliente acessa cada funcionalidade do sistema.