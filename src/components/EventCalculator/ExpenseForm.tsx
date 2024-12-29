import React from 'react';
import { PlusCircle } from 'lucide-react';
import type { ExpenseItem } from '../../types/expense';
import type { ExpenseCategory } from '../../constants/categories';

interface ExpenseFormProps {
  newExpense: Omit<ExpenseItem, 'id' | 'date'>;
  onExpenseChange: (expense: Omit<ExpenseItem, 'id' | 'date'>) => void;
  onSubmit: (e: React.FormEvent) => void;
  categories: readonly ExpenseCategory[];
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({
  newExpense,
  onExpenseChange,
  onSubmit,
  categories,
}) => {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          value={newExpense.description}
          onChange={(e) => onExpenseChange({ ...newExpense, description: e.target.value })}
          placeholder="Description"
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
        />
        <input
          type="number"
          value={newExpense.amount || ''}
          onChange={(e) => onExpenseChange({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
          placeholder="Amount"
          min="0"
          step="0.01"
          className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
        />
        <div className="flex gap-2">
          <select
            value={newExpense.category}
            onChange={(e) => onExpenseChange({ ...newExpense, category: e.target.value as ExpenseCategory })}
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <button
            type="submit"
            className="px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            <PlusCircle className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;