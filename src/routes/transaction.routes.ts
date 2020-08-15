import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

/*
      GET /transactions: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora,
      junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:


  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
*/
transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    const transactions = transactionsRepository.all();

    const balance = transactionsRepository.getBalance();

    return response.json({transactions, balance});

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});


/*
      POST /transactions: A rota deve receber title, value e type dentro do corpo da requisição,
      sendo type o tipo da transação, que deve ser income para entradas (depósitos) e outcome para saídas (retiradas).
      Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o seguinte formato:

      {
        "id": "uuid",
        "title": "Salário",
        "value": 3000,
        "type": "income"
      }

*/
transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const { title, value, type } = request.body;

    const createTransactionService = new CreateTransactionService(transactionsRepository);

    const transaction = createTransactionService.execute({ title, value, type});

    return response.json(transaction);

  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
