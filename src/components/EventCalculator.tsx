import React, { useState } from 'react';
import { DollarSign, PlusCircle, Tag } from 'lucide-react';
import type { ExpenseItem } from '../utils/calculator';
import { calculateTotal, calculateByCategory } from '../utils/calculator';

const CATEGORIES = ['Venue', 'Catering', 'Decoration', 'Entertainment', 'Other'];

const EventCalculator: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [newExpense, setNewExpense] = useState<ExpenseItem>({
    description: '',
    amount: 0,
    category: CATEGORIES[0]
  });

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount > 0) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: '', amount: 0, category: CATEGORIES[0] });
    }
  };

  const categoryTotals = calculateByCategory(expenses);
  const total = calculateTotal(expenses);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="text-purple-600 h-6 w-6" />
        <h2 className="text-2xl font-semibold">Budget Calculator</h2>
      </div>

      <form onSubmit={handleAddExpense} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            value={newExpense.description}
            onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
            placeholder="Description"
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
          />
          <input
            type="number"
            value={newExpense.amount || ''}
            onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) || 0 })}
            placeholder="Amount"
            min="0"
            step="0.01"
            className="rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
          />
          <div className="flex gap-2">
            <select
              value={newExpense.category}
              onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-200"
            >
              {CATEGORIES.map(category => (
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

      <div className="space-y-4">
        {expenses.map((expense, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Tag className="text-purple-600 h-4 w-4" />
              <span className="font-medium">{expense.description}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">{expense.category}</span>
              <span className="font-semibold">${expense.amount.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="space-y-2">
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <div key={category} className="flex justify-between text-sm">
              <span className="text-gray-600">{category}</span>
              <span className="font-medium">${amount.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t flex justify-between">
          <span className="font-semibold">Total Budget</span>
          <span className="font-bold text-lg text-purple-600">${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default EventCalculator;