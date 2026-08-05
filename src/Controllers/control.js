//Como aqui é o controller, a gente vai chamar o model e fazer as requisições HTTP.

import { AgendamentoM } from '../models/model.js';


export async function BuscarAgendamento(req, res) {
  try {
    const agenda = await AgendamentoM.findAll();

    return res.status(200).json(agenda);

  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar os agendamentos.' });
  }
}

export async function Criar(req, res) {
  try {
      const { clientName, service, date } = req.body;

    // Validação que vai meio que verifica se todos os campos obrigatórios foram enviados
    if (!clientName || !date) {
  
      return res.status(400).json({ 
        error: 'É necessário fornecer o nome do cliente (clientName) e a data/horário (date).' 
      });
    }

    const parsedDate = new Date(date);

    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ error: 'Data/Hora inválida.' });
    }

    const newAppointment = await AgendamentoM.create({ 
      clientName, 
      service,
      dateTime: date });

    return res.status(201).json(newAppointment);

  } catch (error) {
    console.error('Erro ao criar agendamento:', error);

    if (error.message === 'Horário já agendado para outro cliente.') {
      return res.status(400).json({ error: error.message });
    }

    return res.status(500).json({ error: 'Erro interno ao criar o agendamento.' });
  }
}