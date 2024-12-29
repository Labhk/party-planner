import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import type { ExpenseItem } from '../../types/expense';
import { EXPENSE_CATEGORIES } from '../../constants/categories';
import { calculateTotal, calculateByCategory, createExpense } from '../../utils/expense';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

const EventAlgebra: React.FC = () => {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [newExpense, setNewExpense] = useState<Omit<ExpenseItem, 'id' | 'date'>>({
    description: '',
    amount: 0,
    category: EXPENSE_CATEGORIES[0]
  });

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (newExpense.description && newExpense.amount > 0) {
      const expense = createExpense(
        newExpense.description,
        newExpense.amount,
        newExpense.category
      );
      setExpenses([...expenses, expense]);
      setNewExpense({ description: '', amount: 0, category: EXPENSE_CATEGORIES[0] });
    }
  };

  const categoryTotals = calculateByCategory(expenses);
  const total = calculateTotal(expenses);

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="text-purple-600 h-6 w-6" />
        <h2 className="text-2xl font-semibold">Event Algebra</h2>
      </div>

      <ExpenseForm
        newExpense={newExpense}
        onExpenseChange={setNewExpense}
        onSubmit={handleAddExpense}
        categories={EXPENSE_CATEGORIES}
      />

      <ExpenseList expenses={expenses} />
      
      <ExpenseSummary
        categoryTotals={categoryTotals}
        total={total}
      />
    </div>
  );
};