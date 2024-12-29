import type { ExpenseCategory } from '../constants/categories';

export interface ExpenseItem {
  id: string;
  description: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
}