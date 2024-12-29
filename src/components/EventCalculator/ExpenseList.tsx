import React from 'react';
import { Tag } from 'lucide-react';
import type { ExpenseItem } from '../../types/expense';
import { formatCurrency } from '../../utils/expense';

interface ExpenseListProps {
  expenses: ExpenseItem[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <Tag className="text-purple-600 h-4 w-4" />
            <span className="font-medium">{expense.description}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">{expense.category}</span>
            <span className="font-semibold">{formatCurrency(expense.amount)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;