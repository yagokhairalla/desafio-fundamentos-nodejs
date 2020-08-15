"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var TransactionsRepository_1 = __importDefault(require("../repositories/TransactionsRepository"));
var CreateTransactionService_1 = __importDefault(require("../services/CreateTransactionService"));
var transactionRouter = express_1.Router();
var transactionsRepository = new TransactionsRepository_1.default();
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
transactionRouter.get('/', function (request, response) {
    try {
        // TODO
    }
    catch (err) {
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
transactionRouter.post('/', function (request, response) {
    try {
        // TODO
        var _a = request.body, title = _a.title, value = _a.value, type = _a.type;
        var createTransactionService = new CreateTransactionService_1.default(transactionsRepository);
        var transaction = createTransactionService.execute({ title: title, value: value, type: type });
        return transaction;
    }
    catch (err) {
        return response.status(400).json({ error: err.message });
    }
});
exports.default = transactionRouter;
