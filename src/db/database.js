/*
Fala pessoal, então essa conexão manual via mysql2 não é mais necessária, pois agora o projeto utiliza o Prisma ORM que é mais facil e mais seguro, para vocês que querem apreender melhor, deixei este aqui para estudo mesmo.
A conexão é gerenciada através do 'prisma.config.ts' e do PrismaClient.
Estoou usando ele na versão 6.19.3 entretanto existe versões bem mais novas, ele foi mias facil de trabalhar.
*/ 
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: '',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0                     
});

async function connectDB() {
  try {
    const connection = await pool.getConnection();
    console.log('Conectamos com o mysql2!');
    connection.release();
  } catch (error) {
    console.error('Não foi possível conectar:', error);
  }
}

connectDB();

module.exports = pool;