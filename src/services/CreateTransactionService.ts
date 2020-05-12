import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import TransactionDTO from "../dtos/TransactionDTO";

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: TransactionDTO): Transaction {
    return this.transactionsRepository.create({ title, value, type });
  }
}

export default CreateTransactionService;
