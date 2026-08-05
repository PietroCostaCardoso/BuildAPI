# BuildAPI — API de Agendamento
Uma API RESTful desenvolvida com **Node.js**, **Express** e **Prisma ORM** para gerenciamento completo de agendamentos. Oferece uma estrutura modularizada com suporte a banco de dados relacional MySQL.
>Um diferencial para alguém que está visualizando é que neste projeto de API tem o Rate limit para controle de req

> Para conferir todos os dados de como feito e duvidas que muitas pessoas podem ter, acesse a pasta [`/Docs`](./Docs/README.md). Lá você encontra o manual completo da aplicação!

---

## Tecnologias Utilizadas

- **Node.js** (v18+)
- **Express.js** (v5) — Framework web
- **Prisma ORM** (v7) — Mapeamento Objeto-Relacional
- **MySQL** — Banco de dados relacional
- **Dotenv** — Gerenciamento de variáveis de ambiente
- **CORS** — Middleware para permissões de acesso
- **Nodemon** — Recarregamento automático em desenvolvimento

---

## Estrutura do Projeto

\`\`\`text
BuildAPI/
├── Docs/
│   └── README.md          # Documentação detalhada da API
├── prisma/                
├── src/
│   ├── Controllers/
│   │   └── control.js     # Regras de controle e respostas HTTP
│   ├── db/
│   │   └── database.js    # Conexão e instância do Prisma Client
|   ├── middlewares/
    |   └──  RateLimit.js   # contrlar req
│   ├── models/
│   │   └── model.js       # Regras de negócio e comunicação com o Prisma
│   ├── routes/
│   │   └── routes.js      # Definição das rotas e endpoints
│   └── main.js            # Ponto de entrada da aplicação
├── .env                   # Variáveis de ambiente (ignorado pelo git)
├── package.json           # Dependências e scripts do projeto
└── README.md             
\`\`\`

---

## Como Inicializar o Projeto

Siga as instruções abaixo para rodar a API localmente na sua máquina:

### Pré-requisitos

- Node.js instalado
- Servidor MySQL em execução 
- Git instalado

### 1. Clonar o Repositório

\`\`\`bash
git clone 
cd BuildAPI
\`\`\`

### 2. Instalar as Dependências

\`\`\`bash
npm install
\`\`\`

### 3. Configurar Variáveis de Ambiente

Crie um arquivo \`.env\` na raiz do projeto

\`\`\`
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
PORT=3000
\`\`\`

### 4. Sincronizar o Banco com o Prisma

Para criar as tabelas no seu banco MySQL com base no \`schema.prisma\`:

\`\`\`bash
npx prisma migrate dev
\`\`\`

(Opcional) Você pode abrir o painel visual do Prisma Studio para gerenciar os dados direto do navegador:

\`\`\`bash
npx prisma studio
\`\`\`

### 5. Rodar a Aplicação

Modo de Desenvolvimento (com Nodemon):

\`\`\`bash
npm run dev
\`\`\`

Modo de Produção:

\`\`\`bash
npm start
\`\`\`

A API estará rodando por padrão em: \`http://localhost:3000\` (ou na porta definida no seu \`.env\`).

---

## Como Testar via Postman / Insomnia / Hoppscotch

Com o servidor rodando (\`http://localhost:3000\`), você pode enviar requisições HTTP para testar as rotas da API.

### Exemplo de Requisição (Criar Agendamento)

- **Método:** POST
- **URL:** \`http://localhost:3000/agendamentos\` (ou o caminho configurado nas suas rotas)

**Body (JSON):**

\`\`\`json
{
  "cliente": "Pedrinho",
  "data": "2026-07-07",
  "horario": "11:30",
  "servico": "Consulta"
}
\`\`\`

 ## 👤 Autor

Desenvolvido com dedicação por **Pietro Costa Cardoso**.  
Se este projeto te ajudou, considere dar uma ⭐ no repositório!

Pietro Costa Cardoso. Todos os direitos reservados sob a Licença MIT.