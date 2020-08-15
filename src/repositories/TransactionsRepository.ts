import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionDTO {
  title: string;

  value: number;

  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions.reduce( function (x, y) {
      if(y.type === "income")
          return x + y.value;
      else
        return x + 0;
    }, 0);

    const outcome = this.transactions.reduce( function (x, y) {
      if(y.type === "outcome")
          return x + y.value;
      else
        return x + 0;
    }, 0);

    const total = income - outcome;


    const balance = {
      income, outcome, total
    };

    return balance;
  }

  public create({title, value, type}: TransactionDTO): Transaction {
    // TODO
    const transaction = new Transaction({
      title,
      value,
      type
    });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
