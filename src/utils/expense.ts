import type { ExpenseItem } from '../types/expense';

export const generateExpenseId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateTotal = (expenses: ExpenseItem[]): number => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateByCategory = (expenses: ExpenseItem[]): Record<string, number> => {
  return expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);
};

export const createExpense = (
  description: string,
  amount: number,
  category: ExpenseItem['category']
): ExpenseItem => {
  return {
    id: generateExpenseId(),
    description,
    amount,
    category,
    date: new Date().toISOString(),
  };
};