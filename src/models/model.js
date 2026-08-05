import pkg from '@prisma/client';
const { PrismaClient } = pkg;


const prisma = new PrismaClient();

// Agrupar todas as funções que mexem com "Agendamentos"
export const AgendamentoM = {
  async findAll() {
    return await prisma.appointment.findMany({
      orderBy: { dateTime: 'asc' }
    });
  },

  
  async create(data) {
    const { clientName, service, dateTime } = data;
    const parsedDateTime = new Date(dateTime);

    if (isNaN(parsedDateTime.getTime())) {
      throw new Error('Data/Hora inválida.');
    }

    // Validação de Horário 
    const ConferindoAgendamento = await prisma.appointment.findFirst({
      where: {  
        dateTime: parsedDateTime
      }
    });

    if (ConferindoAgendamento) {
      throw new Error('Já existe um agendamento para este horário.');
    }

    return await prisma.appointment.create({
      data: {
        clientName,
        service,
        dateTime: parsedDateTime
      }
    });
  }
};