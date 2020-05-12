export default interface TransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}