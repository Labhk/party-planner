export interface ExpenseItem {
  description: string;
  amount: number;
  category: string;
}

export const calculateTotal = (expenses: ExpenseItem[]): number => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

export const calculateByCategory = (expenses: ExpenseItem[]): Record<string, number> => {
  return expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {} as Record<string, number>);
};