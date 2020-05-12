import Transaction from '../models/Transaction';
import TransactionDTO from '../dtos/TransactionDTO';
import Balance from '../dtos/BalanceDTO';

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    return {
      income: this.calculateTransactionsByType("income"),
      outcome: this.calculateTransactionsByType("outcome"),
      total: this.calculateTotalTransactions()
    }
  }

  public create({ title, value, type }: TransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type});
    this.transactions.push(transaction);
    return transaction;
  }

  private calculateTransactionsByType(type: string): number {
    const transactions = this.transactions
      .filter(t => t.type == type)
      .map(t => t.value);
    
    if (!transactions.length) {
      return 0;
    }

    return transactions.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  private calculateTotalTransactions(): number {
    const transactions = this.transactions.map(t => t.value);
    
    if (!transactions.length) {
      return 0;
    }

    return transactions.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
}

export default TransactionsRepository;
